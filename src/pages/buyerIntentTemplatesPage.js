import { renderBuyerIntentTemplatesPage } from '../components/buyerIntentTemplates.js';
import { buyerIntentTemplates } from '../data/buyerIntentTemplates.js';

export function renderBuyerIntentTemplatePage(rootElement) {
  rootElement.innerHTML = renderBuyerIntentTemplatesPage(buyerIntentTemplates);
}
