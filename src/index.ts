import { CoinbaseAutoTrader } from './interfaces';
import { convertToTarget } from './convert-to-target';

((global: any) => {
  (global.CoinbaseAutoTrader as Partial<CoinbaseAutoTrader>) = {
    convertToTarget,
    // start,
  };

  // global.CoinbaseAutoTrader.start();
})(window);
