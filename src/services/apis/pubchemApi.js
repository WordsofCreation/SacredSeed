const PUBCHEM_BASE_URL = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug';

function encodePathSegment(value) {
  return encodeURIComponent(value.trim());
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`PubChem request failed with ${response.status}`);
  }

  return response.json();
}

export async function fetchPubchemCidsByName(name) {
  if (!name?.trim()) {
    return [];
  }

  const encoded = encodePathSegment(name);
  const url = `${PUBCHEM_BASE_URL}/compound/name/${encoded}/cids/JSON`;

  try {
    const payload = await fetchJson(url);
    return payload?.IdentifierList?.CID ?? [];
  } catch {
    return [];
  }
}

export async function fetchPubchemCompoundSummaryByCid(cid) {
  if (!cid) {
    return null;
  }

  const encoded = encodePathSegment(String(cid));
  const url = `${PUBCHEM_BASE_URL}/compound/cid/${encoded}/description/JSON`;

  try {
    const payload = await fetchJson(url);
    return payload?.InformationList?.Information?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function fetchPubchemCompoundPropertiesByCid(cid) {
  if (!cid) {
    return null;
  }

  const encoded = encodePathSegment(String(cid));
  const properties = ['MolecularFormula', 'MolecularWeight', 'IUPACName', 'Title'].join(',');
  const url = `${PUBCHEM_BASE_URL}/compound/cid/${encoded}/property/${properties}/JSON`;

  try {
    const payload = await fetchJson(url);
    return payload?.PropertyTable?.Properties?.[0] ?? null;
  } catch {
    return null;
  }
}
