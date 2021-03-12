import { acceptedCoinFilter, formatCoins, getCoinListLessThan, getRisingCoins, getSpecificCoin } from "./coin-list-helper";
import { AMOUNT_TO_KEEP, AMOUNT_TO_REACH, THRESHOLD_TO_SELL, THRESHOLD_TO_BUY, REFRESH_TIMER, TARGET_STORING_COIN } from "./constants";
import { convertCoinToTarget } from "./convert-executer";
import { createContainer, displayOperation } from "./ui-handler";
import { delay } from "./convert-helper";
import { Coin } from "./interfaces";

export async function sellCoins(threshold: number = THRESHOLD_TO_SELL) {
  createContainer();
  displayOperation('⏳ Loading...');
  await delay(10000);
  const risingCoins = getRisingCoins(threshold);
  const coinPairs = formatCoins(risingCoins);
  const configuredCoins = acceptedCoinFilter(coinPairs);
  if (configuredCoins.length) {
    console.table(configuredCoins, ['ticker', 'amount']);
    (window as any).CoinbaseAutoTrader.currentIteration = 0;
    executeConvertsToSell(configuredCoins);
  } else {
    displayOperation('📉 No matching coins!');
    startRefreshTimer();
  }
}

export async function executeConvertsToSell(coins: Coin[]): Promise<void> {
  const currentIteration = (window as any).CoinbaseAutoTrader.currentIteration;
  console.log('🔄 Current iteration: ', currentIteration);
  displayOperation(`🔄 Current iteration: ${currentIteration}`);
  if (currentIteration < coins.length) {
    const coin = coins[currentIteration];
    displayOperation(`💸 Converting ${(Math.round((coin.amount - AMOUNT_TO_KEEP) * 100) / 100).toFixed(2)} of ${coin.ticker}`);
    await delay(5000);
    await convertCoinToTarget(coin.ticker, TARGET_STORING_COIN, coin.amount - AMOUNT_TO_KEEP);
    displayOperation(`💰 Converting ${coin.ticker} done!`);
    (window as any).CoinbaseAutoTrader.currentIteration = currentIteration + 1;
    executeConvertsToSell(coins);
  } else {
    displayOperation('✅ All iterations done!');
    startRefreshTimer();
  }
}

export async function buyCoins(threshold: number = THRESHOLD_TO_BUY) {
  createContainer();
  displayOperation('⏳ Loading...');
  await delay(10000);
  const coinList = getCoinListLessThan(threshold);
  const coinPairs = formatCoins(coinList);
  const configuredCoins = acceptedCoinFilter(coinPairs);
  if (configuredCoins.length) {
    console.table(configuredCoins, ['ticker', 'amount']);
    (window as any).CoinbaseAutoTrader.currentIteration = 0;
    const mainSourceCoin = getSpecificCoin(TARGET_STORING_COIN);
    executeConvertsToBuy(configuredCoins, mainSourceCoin);
  } else {
    displayOperation('📉 No matching coins!');
    startRefreshTimer();
  }
}

export async function executeConvertsToBuy(coins: Coin[], mainSourceCoin: Coin): Promise<void> {
  const currentIteration = (window as any).CoinbaseAutoTrader.currentIteration;
  console.log('🔄 Current iteration: ', currentIteration);
  displayOperation(`🔄 Current iteration: ${currentIteration}`);
  if (currentIteration < coins.length) {
    const coin = coins[currentIteration];
    displayOperation(`💸 Converting ${(Math.round((AMOUNT_TO_REACH - coin.amount) * 100) / 100).toFixed(2)} of ${coin.ticker}`);
    await delay(5000);
    const amount = (Math.round((mainSourceCoin.amount / coins.length) * 100) / 100);
    await convertCoinToTarget(TARGET_STORING_COIN, coin.ticker, amount - 2);
    displayOperation(`💰 Converting ${coin.ticker} done!`);
    (window as any).CoinbaseAutoTrader.currentIteration = currentIteration + 1;
    executeConvertsToBuy(coins, mainSourceCoin);
  } else {
    displayOperation('✅ All iterations done!');
    startRefreshTimer();
  }
}

export async function startRefreshTimer() {
  await delay(5000);
  displayOperation('🔄 Reloading in...');
  await delay(REFRESH_TIMER * 1000 * 60);
  location.reload();
}
