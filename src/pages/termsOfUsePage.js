import { renderLegalPageLayout } from '../components/legalPageLayout.js';

export function renderTermsOfUsePage(rootElement) {
  rootElement.innerHTML = renderLegalPageLayout({
    title: 'Terms of Use',
    subtitle:
      'These terms describe how SacredSeed may be used as a professional educational herbal reference platform.',
    // Keep this text aligned with current product capabilities and legal guidance.
    sections: [
      {
        heading: 'Educational Platform Scope',
        body: `
          <p>
            SacredSeed provides botanical, materia medica, and preparation context for informational and educational purposes.
            Content is intended to support learning and responsible herbal literacy.
          </p>
        `
      },
      {
        heading: 'No Medical Advice',
        body: `
          <p>
            SacredSeed does not provide medical advice, diagnosis, or treatment. Content should not be used as a substitute for
            professional medical judgment or care from licensed healthcare providers.
          </p>
          <p>
            Always consult qualified professionals regarding medical conditions, medications, allergies, pregnancy, lactation,
            or other safety-sensitive contexts.
          </p>
        `
      },
      {
        heading: 'Source Attribution and Third-Party Data',
        body: `
          <p>
            The platform may incorporate third-party datasets, APIs, and source materials. SacredSeed seeks to preserve
            attribution and licensing context where applicable. Third-party content remains subject to the relevant provider
            terms and policies.
          </p>
        `
      },
      {
        heading: 'Acceptable Use',
        body: `
          <p>
            You agree to use SacredSeed lawfully and respectfully. You may not attempt to disrupt service operations,
            misuse automated access in ways that degrade availability, or republish protected content in violation of
            applicable rights and licenses.
          </p>
        `
      },
      {
        heading: 'Limitations of Liability',
        body: `
          <p>
            SacredSeed is provided on an "as is" and "as available" basis. While we strive for careful sourcing and clarity,
            we do not guarantee completeness, timeliness, or error-free operation. To the extent permitted by law,
            SacredSeed and its maintainers are not liable for losses arising from use of, or reliance on, site content.
          </p>
        `
      },
      {
        heading: 'Policy Updates',
        body: `
          <p>
            We may update these terms as SacredSeed evolves. Continued use of the site after updates indicates acceptance
            of the revised terms.
          </p>
        `
      }
    ]
  });
}
