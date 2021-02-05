import { CoinbaseAutoTrader } from './interfaces';
import { start } from './start';

((global: any) => {
  (global.CoinbaseAutoTrader as Partial<CoinbaseAutoTrader>) = {
    start,
  };

  global.CoinbaseAutoTrader.start();
})(window);
