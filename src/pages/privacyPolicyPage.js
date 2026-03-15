import { renderLegalPageLayout } from '../components/legalPageLayout.js';

export function renderPrivacyPolicyPage(rootElement) {
  rootElement.innerHTML = renderLegalPageLayout({
    title: 'Privacy Policy',
    subtitle:
      'SacredSeed is committed to clear, respectful privacy practices. This page explains what information may be collected and how it is used in support of an educational herbal reference platform.',
    // Update policy text section-by-section as infrastructure evolves.
    sections: [
      {
        heading: 'Information We Collect',
        body: `
          <p>
            SacredSeed is designed to be readable without requiring user accounts. We may collect limited technical information
            needed to keep the website stable and secure, such as browser type, approximate location by region, device type,
            and page interaction metrics.
          </p>
          <p>
            If you choose to contact us directly, we may receive the information you include in your message (such as name,
            email address, and the privacy concern you are reporting).
          </p>
        `
      },
      {
        heading: 'Analytics and Usage Data',
        body: `
          <p>
            SacredSeed may use privacy-conscious analytics to understand site performance, educational content usage, and broad
            navigation patterns. This helps us improve readability, content architecture, and sourcing transparency.
          </p>
          <p>
            Where analytics tools are used, we aim to avoid collecting unnecessary personal information and to configure tools
            with data-minimization settings when available.
          </p>
        `
      },
      {
        heading: 'Cookies and Similar Technologies',
        body: `
          <p>
            SacredSeed may use cookies or local storage for essential site behavior and optional measurement features.
            A consent notice is provided so visitors can acknowledge optional data usage where applicable.
          </p>
          <p>
            You can manage cookies through browser settings. Disabling some cookies may affect parts of the site experience
            if optional services are added in future releases.
          </p>
        `
      },
      {
        heading: 'Third-Party Services and Data Providers',
        body: `
          <p>
            SacredSeed may integrate trusted third-party services for botanical data, taxonomy, chemistry, or platform analytics.
            These services operate under their own policies and terms. We present source attribution to maintain scholarly
            transparency and proper data-provider acknowledgment.
          </p>
        `
      },
      {
        heading: 'Data Retention and Protection',
        body: `
          <p>
            We retain operational data only as long as needed for platform reliability, security, and educational quality
            improvement. We use reasonable administrative and technical safeguards appropriate to a public educational website.
          </p>
        `
      },
      {
        heading: 'Contact for Privacy Questions',
        body: `
          <p>
            For privacy questions, requests, or concerns, please contact the SacredSeed site owner through the project contact
            channel listed on the About page. Include enough detail for us to understand and respond clearly.
          </p>
        `
      }
    ]
  });
}
