import { filterConfiguredCoins, formatCoins, getRisingCoins } from "./coin-list-helper";
import { AMOUNT_TO_KEEP, EXPECTED_AMOUNT, REFRESH_TIMER } from "./constants";
import { convertCoinToTarget } from "./convert-executer";
import { delay } from "./convert-helper";
import { Coin } from "./interfaces";

export async function start(threshold: number = EXPECTED_AMOUNT) {
  await delay(10000);
  const risingCoins = getRisingCoins(threshold);
  const coinPairs = formatCoins(risingCoins);
  const configuredCoins = filterConfiguredCoins(coinPairs);
  if (configuredCoins.length) {
    console.table(configuredCoins, ['ticker', 'amount']);
    (window as any).CoinbaseAutoTrader.currentIteration = 0; 
    executeConverts(configuredCoins);
  } else {
    console.log('📉 No matching coins!');
    startRefreshTimer();
  }
}

export async function executeConverts(coins: Coin[]): Promise<void> {
  const currentIteration = (window as any).CoinbaseAutoTrader.currentIteration;
  console.log('🔄 Current iteration: ', currentIteration);

  if (currentIteration < coins.length) {
    const coin = coins[currentIteration];
    console.log(`💸 Converting ${coin.amount - AMOUNT_TO_KEEP} of ${coin.ticker}...`);
    await delay(5000);

    await convertCoinToTarget(coin.ticker, coin.amount - AMOUNT_TO_KEEP);

    console.log(`💰 Converting ${coin.ticker} done!`);

    (window as any).CoinbaseAutoTrader.currentIteration = currentIteration + 1;
    
    executeConverts(coins);
  } else {
    console.log('✅ All iterations done!');
    startRefreshTimer();
  }
}

export async function startRefreshTimer() {
  await delay(REFRESH_TIMER * 1000 * 60);
  location.reload();
}
