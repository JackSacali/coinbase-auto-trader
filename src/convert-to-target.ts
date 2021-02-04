import { clickOn, delay, fillAmount } from "./ui-handler";
import { COINS_SELECTOR_PAIRS, MAIN_TARGET_STABLE_COIN, SELECTORS } from "./constants";

export async function convertToTarget(source: string, amount: number): Promise<void> {
  clickOn(SELECTORS.BUY_SELL); // Buy/Sell.
  await delay(1000);
  clickOn(SELECTORS.CONVERT_TAB); // Convert
  await delay(100);

  clickOn(SELECTORS.CURRENCY_LIST_FROM); // From currency list
  await delay(100);
  clickOn(`[data-element-handle="convert-from-select-${COINS_SELECTOR_PAIRS[source]}"]`); // Select from currency
  await delay(100);

  clickOn(SELECTORS.CURRENCY_LIST_TO); // To currency list
  await delay(100);
  clickOn(`[data-element-handle="convert-to-select-${COINS_SELECTOR_PAIRS[MAIN_TARGET_STABLE_COIN]}"]`); // Select to currency
  await delay(1000);

  fillAmount(amount);
  await delay(1000);

  clickOn(SELECTORS.CONVERT_PREVIEW_BUTTON); // Preview button
  await delay(1000);
  clickOn(SELECTORS.CONVERT_CONFIRM_BUTTON); // Confirm button
  await delay(1000);

  clickOn(SELECTORS.OVERLAY); // Overlay / close
}