import { $ } from './utils/querySelector.js';
import { handlePurchaseResultToggle } from './handler/handlePurchaseResultToggle.js';
import { handlePurchasePriceInput } from './handler/handlePurchasePriceInput.js';
import Lotto from './model/Lotto.js';

const init = () => {
  const $purchasePriceInputFormButton = $('#purchase-price-input-form__button');
  const $purchaseResultSectionToggle = $('#purchase-result-section__toggle');

  const lotto = new Lotto();

  $purchasePriceInputFormButton.addEventListener('click', () =>
    handlePurchasePriceInput(lotto),
  );
  $purchaseResultSectionToggle.addEventListener(
    'click',
    handlePurchaseResultToggle,
  );
};

const App = () => {
  init();
};

window.addEventListener('DOMContentLoaded', App);