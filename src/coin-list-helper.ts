import { ACCEPTED_COINS, SELECTORS } from "./constants";
import { Coin } from "./interfaces";

export function getRisingCoins(threshold: number): HTMLElement[] {
  const coinValueList = document.querySelectorAll(SELECTORS.COIN_VALUE);
  const targetCoins: HTMLElement[] = [];
  coinValueList.forEach((element) => {
      if (!!element?.innerHTML?.includes('€')) {
        const amount = parseFloat(element?.innerHTML?.replace(',', '')?.replace('€', ''));
        if (amount > threshold) {
          targetCoins.push(element as HTMLElement);
        }
      }
    });
  return targetCoins;
}

export function formatCoins(nodes: HTMLElement[]): Coin[] {
  const result: Coin[] = [];
  nodes.forEach((element) => {
    const amount = parseFloat(element?.innerHTML?.replace(',', '')?.replace('€', ''));
    const regex = /[A-Z]/g;
    const abbreviation = (element?.nextSibling as HTMLElement)?.innerHTML?.match(regex)?.join('') || '';

    result.push({ abbreviation, amount });
  });

  return result;
}

export function filterConfiguredCoins(coins: Coin[]): Coin[] {
  return coins.filter((coin) => {
    return ACCEPTED_COINS.includes(coin.abbreviation);
  });
}
