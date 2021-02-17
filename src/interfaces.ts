export interface CoinbaseAutoTrader {
  start: () => void;
  fillAmount: (amount: string | number) => void;
  currentIteration?: number;
  // convertToTarget: (source: string, amount: number) => Promise<void>;
}

export interface IndexString {
  [key: string]: string;
}

export interface Coin {
  ticker: string;
  amount: number;
}

export interface ElementParams {
  tag?: string;
  classes?: string[];
  id?: string;
  styles?: IndexString[];
  attributes?: IndexString[];
  innerHTML?: string;
  children?: ElementParams[];
}