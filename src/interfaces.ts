export interface CoinbaseAutoTrader {
  start: () => void;
  currentIteration?: number;
  // convertToTarget: (source: string, amount: number) => Promise<void>;
}

export interface IndexString {
  [key: string]: string;
}

export interface Coin {
  abbreviation: string;
  amount: number;
}