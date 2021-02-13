import { CoinbaseAutoTrader } from './interfaces';
import { fillAmount } from './convert-helper';
import { start } from './start';

((global: any) => {
  (global.CoinbaseAutoTrader as Partial<CoinbaseAutoTrader>) = {
    start,
    fillAmount
  };

  // global.CoinbaseAutoTrader.start();
})(window);
