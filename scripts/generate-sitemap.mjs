import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

import { getCanonicalBaseUrl, getCanonicalPageUrl } from '../src/config/siteConfig.js';
import { herbCollectionDefinitions } from '../src/data/herbCollections.js';
import { learningPathwayDefinitions } from '../src/data/learningPathways.js';
import { seasonalCollectionDefinitions } from '../src/data/seasonalCollections.js';
import { editorialArticleDefinitions } from '../src/data/editorialArticles.js';
import { herbBatchStarter } from '../src/data/herbStarterBatch.js';
import { herbBatch2 } from '../src/data/herbBatch2.js';
import { herbBatch3 } from '../src/data/herbBatch3.js';
import { herbBatch4 } from '../src/data/herbBatch4.js';
import { herbBatch5 } from '../src/data/herbBatch5.js';
import { herbBatch6 } from '../src/data/herbBatch6.js';
import { herbBatch7 } from '../src/data/herbBatch7.js';
import { herbBatch8 } from '../src/data/herbBatch8.js';
import { herbBatch9 } from '../src/data/herbBatch9.js';
import { herbBatch10 } from '../src/data/herbBatch10.js';
import { herbBatch11 } from '../src/data/herbBatch11.js';

const REPO_ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const SITEMAP_PATH = path.join(REPO_ROOT, 'sitemap.xml');
const ROBOTS_PATH = path.join(REPO_ROOT, 'robots.txt');

const staticRoutes = [
  { path: '/', sourceFiles: ['index.html', 'src/pages/homePage.js'] },
  { path: '/materia-medica', sourceFiles: ['src/pages/materiaMedicaIndexPage.js'] },
  { path: '/collections', sourceFiles: ['src/pages/herbCollectionsPage.js', 'src/data/herbCollections.js'] },
  { path: '/pathways', sourceFiles: ['src/pages/learningPathwaysPage.js', 'src/data/learningPathways.js'] },
  { path: '/seasons', sourceFiles: ['src/pages/seasonalCollectionsPage.js', 'src/data/seasonalCollections.js'] },
  { path: '/articles', sourceFiles: ['src/pages/editorialArticlesPage.js', 'src/data/editorialArticles.js'] },
  { path: '/preparations', sourceFiles: ['src/pages/preparationLibraryPage.js', 'src/data/preparationLibrary.js'] },
  { path: '/about', sourceFiles: ['src/pages/aboutPage.js'] },
  { path: '/affiliate-disclosure', sourceFiles: ['src/pages/affiliateDisclosurePage.js'] },
  { path: '/buyer-guides', sourceFiles: ['src/pages/buyerIntentTemplatesPage.js', 'src/data/buyerIntentTemplates.js'] },
  { path: '/buyer-guides/best-beginner-apothecary-kits', sourceFiles: ['src/pages/bestBeginnerApothecaryKitsPage.js', 'src/config/affiliateConfig.js'] },
  { path: '/buyer-guides/best-tea-infusers', sourceFiles: ['src/pages/bestTeaInfusersPage.js', 'src/config/affiliateConfig.js'] },
  { path: '/buyer-guides/best-herb-dryers', sourceFiles: ['src/pages/bestHerbDryersPage.js', 'src/config/affiliateConfig.js'] },
  { path: '/buyer-guides/best-herbal-books', sourceFiles: ['src/pages/bestHerbalBooksPage.js', 'src/config/affiliateConfig.js'] },
  { path: '/buyer-guides/best-jars-and-storage-for-dried-herbs', sourceFiles: ['src/pages/bestHerbStorageJarsPage.js', 'src/config/affiliateConfig.js'] },
  { path: '/buyer-guides/best-dropper-bottles-for-herbal-preparations', sourceFiles: ['src/pages/bestDropperBottlesPage.js', 'src/config/affiliateConfig.js'] },
  { path: '/buyer-guides/best-tools-for-a-beginner-home-apothecary', sourceFiles: ['src/pages/bestToolsBeginnerHomeApothecaryPage.js', 'src/config/affiliateConfig.js'] }
];

const herbBatches = [
  { sourceFile: 'src/data/herbStarterBatch.js', herbs: herbBatchStarter },
  { sourceFile: 'src/data/herbBatch2.js', herbs: herbBatch2 },
  { sourceFile: 'src/data/herbBatch3.js', herbs: herbBatch3 },
  { sourceFile: 'src/data/herbBatch4.js', herbs: herbBatch4 },
  { sourceFile: 'src/data/herbBatch5.js', herbs: herbBatch5 },
  { sourceFile: 'src/data/herbBatch6.js', herbs: herbBatch6 },
  { sourceFile: 'src/data/herbBatch7.js', herbs: herbBatch7 },
  { sourceFile: 'src/data/herbBatch8.js', herbs: herbBatch8 },
  { sourceFile: 'src/data/herbBatch9.js', herbs: herbBatch9 },
  { sourceFile: 'src/data/herbBatch10.js', herbs: herbBatch10 },
  { sourceFile: 'src/data/herbBatch11.js', herbs: herbBatch11 }
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function getLastModifiedDate(sourceFiles) {
  const commits = sourceFiles
    .map((sourceFile) => {
      try {
        const output = execFileSync('git', ['log', '-1', '--format=%cI', '--', sourceFile], {
          cwd: REPO_ROOT,
          encoding: 'utf8'
        }).trim();

        if (!output) {
          return null;
        }

        const date = new Date(output);
        if (Number.isNaN(date.getTime())) {
          return null;
        }

        return date;
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  if (!commits.length) {
    return null;
  }

  commits.sort((a, b) => b.getTime() - a.getTime());
  return commits[0].toISOString().slice(0, 10);
}

function buildRouteEntries() {
  const routes = [...staticRoutes];

  for (const { sourceFile, herbs } of herbBatches) {
    for (const herb of herbs) {
      routes.push({
        path: `/herbs/${encodeURIComponent(herb.slug)}`,
        sourceFiles: [sourceFile]
      });
    }
  }

  for (const collection of herbCollectionDefinitions) {
    routes.push({
      path: `/collections/${encodeURIComponent(collection.slug)}`,
      sourceFiles: ['src/data/herbCollections.js', 'src/pages/herbCollectionPage.js']
    });
  }

  for (const pathway of learningPathwayDefinitions) {
    routes.push({
      path: `/pathways/${encodeURIComponent(pathway.slug)}`,
      sourceFiles: ['src/data/learningPathways.js', 'src/pages/learningPathwayPage.js']
    });
  }

  for (const collection of seasonalCollectionDefinitions) {
    routes.push({
      path: `/seasons/${encodeURIComponent(collection.slug)}`,
      sourceFiles: ['src/data/seasonalCollections.js', 'src/pages/seasonalCollectionPage.js']
    });
  }

  for (const article of editorialArticleDefinitions) {
    routes.push({
      path: `/articles/${encodeURIComponent(article.slug)}`,
      sourceFiles: ['src/data/editorialArticles.js', 'src/pages/editorialArticlePage.js']
    });
  }

  const seen = new Set();

  return routes.filter((route) => {
    const canonicalPath = route.path.split('#')[0].split('?')[0];

    if (!canonicalPath || seen.has(canonicalPath)) {
      return false;
    }

    seen.add(canonicalPath);
    return true;
  });
}

function createSitemapXml(entries) {
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

  for (const entry of entries) {
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(entry.loc)}</loc>`);
    if (entry.lastmod) {
      lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    }
    lines.push('  </url>');
  }

  lines.push('</urlset>');
  lines.push('');
  return lines.join('\n');
}

function createRobotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${getCanonicalBaseUrl()}/sitemap.xml\n`;
}

function validateEntries(entries) {
  const urls = entries.map((entry) => entry.loc);
  const hasNonAbsolute = urls.some((url) => !/^https:\/\//.test(url));
  const hasHash = urls.some((url) => url.includes('#'));
  const hasQuery = urls.some((url) => url.includes('?'));
  const hasDuplicates = new Set(urls).size !== urls.length;

  if (hasNonAbsolute || hasHash || hasQuery || hasDuplicates) {
    throw new Error('Sitemap validation failed: URLs must be absolute, unique, and free of hash/query fragments.');
  }
}

function main() {
  const routes = buildRouteEntries();
  const entries = routes.map((route) => ({
    loc: getCanonicalPageUrl(route.path),
    lastmod: getLastModifiedDate(route.sourceFiles)
  }));

  validateEntries(entries);

  fs.writeFileSync(SITEMAP_PATH, createSitemapXml(entries), 'utf8');
  fs.writeFileSync(ROBOTS_PATH, createRobotsTxt(), 'utf8');

  console.log(`Generated ${entries.length} sitemap URLs.`);
  console.log(`Wrote ${path.relative(REPO_ROOT, SITEMAP_PATH)} and ${path.relative(REPO_ROOT, ROBOTS_PATH)}.`);
}

main();
