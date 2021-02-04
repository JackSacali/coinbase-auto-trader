import { EXPECTED_AMOUNT } from "./constants";

function getRisingCoins(): HTMLElement[] {
  const coinValueList = document.querySelectorAll('.hdlfEh');
  const targetCoins = [];
  coinValueList.forEach(element => {
      if (!!element?.innerHTML?.includes('€')) {
        const amount = parseFloat(element?.innerHTML?.replace(',', '')?.replace('€', ''));
        if (amount > EXPECTED_AMOUNT) {
          targetCoins.push(element);
        }
      }
    });
  return targetCoins;
}

function getAmountPerCoin(nodes: HTMLElement[]): HTMLElement[] {
  const result = [];
  nodes.forEach((element) => {
    const amount = parseFloat(element?.innerHTML?.replace(',', '')?.replace('€', ''));
    const regex = /[A-Z]/g;
    const coin = element?.nextSibling?.innerHTML?.match(regex)?.join('');

    result.push({ coin, amount });
  })
  return result;
}

const risingCoins = getRisingCoins();
const coinAmountPairs = getAmountPerCoin(risingCoins);





