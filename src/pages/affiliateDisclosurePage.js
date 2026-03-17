import { renderLegalPageLayout } from '../components/legalPageLayout.js';
import { amazonAffiliateConfig } from '../config/affiliateConfig.js';

export function renderAffiliateDisclosurePage(rootElement) {
  rootElement.innerHTML = renderLegalPageLayout({
    title: 'Affiliate Disclosure',
    subtitle:
      'SacredSeed maintains an educational-first editorial process. This page explains how Amazon Associates links may appear and how they support the platform.',
    updatedLabel: 'Last updated: March 2026',
    sections: [
      {
        heading: 'Program Participation',
        body: `<p>${amazonAffiliateConfig.disclosureFullIntro}</p>`
      },
      {
        heading: 'Editorial Integrity',
        body: `
          <p>
            Recommendations are selected for educational usefulness, preparation quality, storage safety, and beginner practicality.
            Participation in affiliate programs does not guarantee positive placement and does not replace safety context.
          </p>
        `
      },
      {
        heading: 'How We Present Affiliate Links',
        body: `
          <p>
            Affiliate links are intentionally added only in buyer-intent content and dedicated recommendation sections. SacredSeed does not
            auto-insert affiliate links across all educational articles.
          </p>
          <p>
            Links are labeled and include appropriate relationship attributes for transparency and SEO best practices.
          </p>
        `
      },
      {
        heading: 'Your Cost and Choice',
        body: `
          <p>
            Using an affiliate link does not increase your purchase price. You are never required to use these links, and you can always
            search independently for equivalent products.
          </p>
        `
      },
      {
        heading: 'Price, Availability, and Product Changes',
        body: `
          <p>
            Product pricing, availability, and listing details can change without notice. Always review current product details and quality
            information before purchasing.
          </p>
        `
      }
    ]
  });
}
