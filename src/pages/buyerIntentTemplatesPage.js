function renderGuideCards(cards = []) {
  return `
    <div class="search-result-grid" role="list">
      ${cards
        .map(
          (card) => `
            <article class="card search-result-card" role="listitem">
              <h3>${card.title}</h3>
              <p>${card.description}</p>
              <a class="profile-link" href="${card.href}">Explore this guide →</a>
            </article>
          `
        )
        .join('')}
    </div>
  `;
}

function renderLinkList(list = []) {
  return `
    <ul>
      ${list.map((item) => `<li><a href="${item.href}">${item.title}</a></li>`).join('')}
    </ul>
  `;
}

export function renderBuyerIntentTemplatePage(rootElement) {
  const teaAndBrewingTools = [
    {
      title: 'Best Tea Infusers for Herbal Tea and Loose-Leaf Blends',
      description:
        'Compare beginner-friendly infusers that support cleaner brews, easier cleanup, and more consistent steeping for everyday herbal tea routines.',
      href: '#/buyer-guides/best-tea-infusers'
    },
    {
      title: 'Best Tea Strainers for Loose Herbal Tea',
      description:
        'Find practical tea strainers that help reduce sediment in your cup while keeping loose-herb tea preparation simple and repeatable.',
      href: '#/buyer-guides/best-tea-strainers-for-loose-herbal-tea'
    }
  ];

  const learningAndStudyTools = [
    {
      title: 'Best Herbal Books for Beginners',
      description:
        'Explore trusted beginner herbalism books that build core plant literacy, safety awareness, and preparation confidence without overwhelm.',
      href: '#/buyer-guides/best-herbal-books'
    },
    {
      title: 'Best Plant Journals and Notebooks for Herbal Study',
      description:
        'Choose journals and notebooks that make it easier to document herb observations, tea experiments, and long-term study notes.',
      href: '#/buyer-guides/best-plant-journals-and-notebooks-for-herbal-study'
    }
  ];

  const storageAndOrganization = [
    {
      title: 'Best Herb Dryers for Drying and Storing Medicinal Herbs',
      description:
        'Review herb drying tools that support airflow, reduce waste, and improve consistency when preserving leaves, flowers, and roots.',
      href: '#/buyer-guides/best-herb-dryers'
    },
    {
      title: 'Best Jars and Storage for Dried Herbs',
      description:
        'Learn which jars and storage setups best protect herb freshness, labeling clarity, and day-to-day home apothecary organization.',
      href: '#/buyer-guides/best-jars-and-storage-for-dried-herbs'
    }
  ];

  const apothecaryEssentials = [
    {
      title: 'Best Beginner Apothecary Kits for Starting a Home Herbal Practice',
      description:
        'Compare starter kit styles and find practical options that support steady learning rather than overbuying tools you may not use.',
      href: '#/buyer-guides/best-beginner-apothecary-kits'
    },
    {
      title: 'Best Dropper Bottles for Herbal Preparations',
      description:
        'See which bottle materials and cap styles work best for labeling, dosing, and long-term tincture and extract storage.',
      href: '#/buyer-guides/best-dropper-bottles-for-herbal-preparations'
    },
    {
      title: 'Best Tools for a Beginner Home Apothecary',
      description:
        'Get a practical overview of foundational home apothecary tools that support safe measurements, cleaner prep, and repeatable workflows.',
      href: '#/buyer-guides/best-tools-for-a-beginner-home-apothecary'
    },
    {
      title: 'How to Build a Simple Home Apothecary Shelf',
      description:
        'Use this setup guide to build a small, useful apothecary shelf around your current habits, storage needs, and available space.',
      href: '#/buyer-guides/how-to-build-a-simple-home-apothecary-shelf'
    }
  ];

  const foundationalLinks = [
    { title: 'What Herbalism Is', href: '#/articles/what-is-herbalism' },
    {
      title: 'How to Start Learning Herbs Without Getting Overwhelmed',
      href: '#/articles/how-to-start-learning-herbs-without-getting-overwhelmed'
    },
    {
      title: 'Tea, Tincture, Infusion, Decoction, and Salve',
      href: '#/articles/tea-tincture-infusion-decoction-and-salve'
    },
    {
      title: 'Herbal Actions Explained in Plain English',
      href: '#/articles/herbal-actions-explained-in-plain-english'
    },
    {
      title: 'Safety First: Contraindications, Dosage, and Responsible Use',
      href: '#/articles/safety-first-contraindications-dosage-and-responsible-use'
    },
    {
      title: 'How to Read an Herb Monograph',
      href: '#/articles/how-to-read-an-herb-monograph'
    }
  ];

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="recommended-herbal-tools-title">
      <header class="section-header">
        <p class="eyebrow">Resource Center</p>
        <h1 id="recommended-herbal-tools-title">Recommended Herbal Tools and Supplies</h1>
        <p>
          This hub brings together beginner-friendly SacredSeed guides on herbal tools and herbal supplies for tea making,
          study, home apothecary setup, storage, and consistent daily practice. Use these resources to build confidence
          gradually with practical home apothecary tools and herbalism supplies for beginners.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="resource-guides-title">
      <h2 id="resource-guides-title">Explore recommended herbal tools and supplies by category</h2>
      <p class="affiliate-note"><strong>This page contains affiliate links. As an Amazon Associate, we earn from qualifying purchases.</strong></p>
      <p>
        We keep this page educational first and commercial second. Each link below takes you to an in-depth guide that explains what to look for,
        why it matters, and how to choose tools that fit your stage of learning.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="tea-brewing-tools-title">
      <h2 id="tea-brewing-tools-title">Tea &amp; Brewing Tools</h2>
      <p>Start with tools that make loose-leaf brewing cleaner and easier to repeat from cup to cup.</p>
      ${renderGuideCards(teaAndBrewingTools)}
    </section>

    <section class="section-shell" aria-labelledby="learning-study-tools-title">
      <h2 id="learning-study-tools-title">Learning &amp; Study Tools</h2>
      <p>Strengthen your herbal foundation with resources that support observation, note-taking, and long-term skill building.</p>
      ${renderGuideCards(learningAndStudyTools)}
    </section>

    <section class="section-shell" aria-labelledby="storage-organization-title">
      <h2 id="storage-organization-title">Storage &amp; Organization</h2>
      <p>Protect freshness and reduce clutter with tools that help you dry, label, and store herbs responsibly.</p>
      ${renderGuideCards(storageAndOrganization)}
    </section>

    <section class="section-shell" aria-labelledby="apothecary-essentials-title">
      <h2 id="apothecary-essentials-title">Apothecary Essentials</h2>
      <p>Build a practical home setup focused on clarity, consistency, and everyday usability.</p>
      ${renderGuideCards(apothecaryEssentials)}
    </section>

    <section class="section-shell" aria-labelledby="start-small-title">
      <h2 id="start-small-title">Start small and build gradually</h2>
      <p>
        You do not need to buy everything at once. Pick one weekly herbal practice, choose the minimum tools needed for that practice,
        and add new supplies only when your routine clearly calls for them.
      </p>
      <ul>
        <li>Choose tools that improve consistency, cleanliness, and labeling.</li>
        <li>Prioritize durability and simplicity over novelty.</li>
        <li>Let your notes and preparation habits guide what to add next.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="foundational-learning-links-title">
      <h2 id="foundational-learning-links-title">Return to foundational herbal education</h2>
      <p>
        Before expanding your toolkit, revisit these core learning articles so your purchases support safe, grounded herbal practice.
      </p>
      ${renderLinkList(foundationalLinks)}
    </section>
  `;
}
