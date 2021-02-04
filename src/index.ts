import { CoinbaseAutoTrader } from './interfaces';

((global: any) => {
  (global.CoinbaseAutoTrader as Partial<CoinbaseAutoTrader>) = {
    convertToTarget,
    start,
  };

  global.CoinbaseAutoTrader.start();
})(window);
