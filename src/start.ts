import { filterConfiguredCoins, formatCoins, getRisingCoins } from "./coin-list-helper";
import { AMOUNT_TO_KEEP, EXPECTED_AMOUNT } from "./constants";
import { convertCoinToTarget } from "./convert-executer";
import { delay } from "./convert-helper";
import { Coin } from "./interfaces";

export async function start(threshold: number = EXPECTED_AMOUNT) {
  await delay(15000);
  const risingCoins = getRisingCoins(threshold);
  const coinPairs = formatCoins(risingCoins);
  const configuredCoins = filterConfiguredCoins(coinPairs);
  console.log("🚀  Coins to convert:", configuredCoins);

  (window as any).CoinbaseAutoTrader.currentIteration = 0;

  executeConverts(configuredCoins);
}

export async function executeConverts(coins: Coin[]): Promise<void> {
  const currentIteration = (window as any).CoinbaseAutoTrader.currentIteration;
  console.log("🚀 Current iteration", currentIteration)

  if (currentIteration < coins.length) {
    const coin = coins[currentIteration];
    console.log(`Converting ${coin.amount - AMOUNT_TO_KEEP} of ${coin.abbreviation}...`);
    await delay(5000);

    await convertCoinToTarget(coin.abbreviation, coin.amount - AMOUNT_TO_KEEP);

    console.log(`Converting ${coin.abbreviation} done!`);

    (window as any).CoinbaseAutoTrader.currentIteration = currentIteration + 1;
    
    executeConverts(coins);
  } else {
    console.log('All iterations done!');
  }
}
