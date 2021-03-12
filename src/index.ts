import { CoinbaseAutoTrader } from './interfaces';
import { fillAmount } from './convert-helper';
import { sellCoins as start } from './start';
// import { buyCoins as start } from './start';

((global: any) => {
  (global.CoinbaseAutoTrader as Partial<CoinbaseAutoTrader>) = {
    start,
    fillAmount
  };

  // global.CoinbaseAutoTrader.start();
})(window);
