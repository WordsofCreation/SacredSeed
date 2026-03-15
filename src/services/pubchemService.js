import { herbChemistryMappings } from '../data/herbChemistryMappings.js';
import {
  fetchPubchemCidsByName,
  fetchPubchemCompoundPropertiesByCid,
  fetchPubchemCompoundSummaryByCid
} from './apis/pubchemApi.js';

function asSearchTerms({ botanicalName, commonName, knownCompounds = [] }) {
  return [...new Set([botanicalName, commonName, ...knownCompounds].filter(Boolean))];
}

function dedupeByCid(records) {
  const seen = new Set();

  return records.filter((record) => {
    if (!record?.cid || seen.has(record.cid)) {
      return false;
    }

    seen.add(record.cid);
    return true;
  });
}

async function fetchCompoundRecordByName(compoundName, metadataByName) {
  const cids = await fetchPubchemCidsByName(compoundName);
  const selectedCid = cids[0];

  if (!selectedCid) {
    return null;
  }

  const [properties, summary] = await Promise.all([
    fetchPubchemCompoundPropertiesByCid(selectedCid),
    fetchPubchemCompoundSummaryByCid(selectedCid)
  ]);

  if (!properties && !summary) {
    return null;
  }

  const mapped = metadataByName.get(compoundName.toLowerCase());

  return {
    cid: selectedCid,
    name: properties?.Title ?? summary?.Title ?? compoundName,
    molecularFormula: properties?.MolecularFormula ?? null,
    molecularWeight: properties?.MolecularWeight ?? null,
    iupacName: properties?.IUPACName ?? null,
    summary: summary?.Description ?? null,
    category: mapped?.category ?? null,
    relevance: mapped?.relevance ?? null
  };
}

export async function fetchPubchemProfileForHerb({ slug, botanicalName, commonName }) {
  const curatedCompounds = herbChemistryMappings[slug]?.compounds ?? [];
  const curatedNames = curatedCompounds.map((item) => item.name);

  // Botanical/common names are queried first; curated compounds act as reliable fallback anchors.
  const herbSearchTerms = asSearchTerms({ botanicalName, commonName, knownCompounds: [] });
  const cidsByHerbTerm = await Promise.all(herbSearchTerms.map((term) => fetchPubchemCidsByName(term)));

  const herbCids = [...new Set(cidsByHerbTerm.flat())].slice(0, 2);

  const herbDerivedRecords = await Promise.all(
    herbCids.map(async (cid) => {
      const [properties, summary] = await Promise.all([
        fetchPubchemCompoundPropertiesByCid(cid),
        fetchPubchemCompoundSummaryByCid(cid)
      ]);

      if (!properties && !summary) {
        return null;
      }

      return {
        cid,
        name: properties?.Title ?? summary?.Title ?? `CID ${cid}`,
        molecularFormula: properties?.MolecularFormula ?? null,
        molecularWeight: properties?.MolecularWeight ?? null,
        iupacName: properties?.IUPACName ?? null,
        summary: summary?.Description ?? null,
        category: null,
        relevance: null
      };
    })
  );

  const metadataByName = new Map(curatedCompounds.map((item) => [item.name.toLowerCase(), item]));
  const curatedRecords = await Promise.all(
    curatedNames.map((name) => fetchCompoundRecordByName(name, metadataByName))
  );

  const compounds = dedupeByCid([...curatedRecords, ...herbDerivedRecords].filter(Boolean)).slice(0, 6);

  return {
    compounds,
    available: compounds.length > 0,
    strategy: {
      herbSearchTerms,
      usedCuratedFallback: compounds.length > 0 && curatedRecords.some(Boolean)
    },
    error: compounds.length ? null : 'No confident PubChem compounds found for this herb query.'
  };
}
