import { renderDisclaimerBlock, renderSourceAttributionBlock } from '../components/complianceBlocks.js';
import { getComplianceContext } from '../services/complianceService.js';
import { dataSources } from '../data/complianceRegistry.js';

export function renderAboutPage(rootElement) {
  const compliance = getComplianceContext('about');

  rootElement.innerHTML = `
    <section class="card about-page">
      <h1>About SacredSeed</h1>
      <p>
        SacredSeed is a professional botanical knowledge platform designed to support thoughtful herbal education.
        Our goal is to make traditional herbal knowledge, modern plant science, and structured materia medica architecture
        available in one refined, readable experience.
      </p>

      <h3>Our Mission</h3>
      <p>
        We are building a transparent herbal reference environment where practitioners, students, and curious learners
        can explore plants with scholarly clarity. SacredSeed emphasizes careful language, data provenance, and elegant
        information design so complex botanical material remains approachable without sacrificing rigor.
      </p>

      <h3>What SacredSeed Offers</h3>
      <p>
        SacredSeed currently offers a growing materia medica index and modular herb profiles with taxonomy,
        preparation traditions, chemistry context, and safety-oriented reference notes. The platform architecture
        is intentionally unified so future regional guides, formula pages, and educational essays can share the same
        source-aware and compliance-aware data model.
      </p>

      <h3>Our Data Approach</h3>
      <p>
        Plant, taxonomy, chemistry, and related safety context may combine curated editorial monographs with third-party
        data providers. We normalize this information into a consistent internal herb object to keep presentation stable
        while preserving source attribution and license awareness.
      </p>

      <h3>Educational Use and Medical Disclaimer</h3>
      <p>
        SacredSeed is an educational herbal reference, not a medical diagnosis or treatment service.
        Content should not replace care from licensed healthcare professionals, particularly in cases involving chronic
        illness, medications, pregnancy, lactation, or complex safety considerations.
      </p>

      <h3>Transparency and Attribution</h3>
      <p>
        Source-specific attribution and licensing requirements matter. SacredSeed is designed to display provider-aware
        attribution notes across herb profiles and future formula, regional, and educational modules, while keeping the
        interface calm, readable, and professional.
      </p>
    </section>

    <section class="compliance-stack">
      ${renderSourceAttributionBlock({
        title: 'Current Data Source Registry',
        sourceAttribution: Object.values(dataSources),
        showLicenseNotes: true
      })}
      ${renderDisclaimerBlock({
        title: 'Educational & Medical Position',
        educationalUseNotice: compliance.educationalUseNotice,
        medicalDisclaimer: compliance.medicalDisclaimer,
        disclaimers: compliance.disclaimers
      })}
    </section>
  `;
}
