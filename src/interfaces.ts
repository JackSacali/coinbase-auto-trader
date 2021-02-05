export interface CoinbaseAutoTrader {
  start: () => void;
  convertToTarget: (source: string, amount: number) => Promise<void>;
}

export interface IndexString {
  [key: string]: string;
}