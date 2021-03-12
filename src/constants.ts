import { IndexString } from "./interfaces";

export const TARGET_STORING_COIN = 'BTC';

export const THRESHOLD_TO_SELL = 55;
export const AMOUNT_TO_KEEP = 50;

export const THRESHOLD_TO_BUY = 40;
export const AMOUNT_TO_REACH = 50;

export const REFRESH_TIMER = 5; // In minutes

export const SELECTORS: IndexString = {
  BUY_SELL: '.iKhbZm',
  CONVERT_TAB: '[data-element-handle="folder-tab-convert"]',
  CURRENCY_LIST_FROM: '[data-element-handle="convert-from-selector"]',
  CURRENCY_LIST_TO: '[data-element-handle="convert-to-selector"]',
  CONVERT_PREVIEW_BUTTON: '[data-element-handle="convert-preview-button"]',
  CONVERT_CONFIRM_BUTTON: '[data-element-handle="convert-confirm-button"]',
  OVERLAY: '.hFwduY__overlay',
  COIN_VALUE: '.hdlfEh',
  UI_CONTAINER: 'coinbase-auto-trader-container',
  UI_OPERATION: 'coinbase-auto-trader-operation',
  UI_TIMER: 'coinbase-auto-trader-timer',
};

export const COINS_SELECTOR_PAIRS: IndexString = {
  AAVE: 'aave',
  ALGO: 'algorand',
  ATOM: 'cosmos',
  BAL: 'balancer',
  BAT: 'basic-attention-token',
  BAND: 'band-protocol',
  BCH: 'bitcoin-cash',
  BNT: 'bancor-network-token',
  BTC: 'bitcoin',
  CGLD: 'celo',
  COMP: 'compound',
  CVC: 'civic',
  DAI: 'dai',
  DASH: 'dash',
  DNT: 'district0x',
  EOS: 'eos',
  ETC: 'ethereum-classic',
  ETH: 'ethereum',
  FIL: 'filecoin',
  GRT: 'the-graph',
  KNC: 'kyber-network',
  LINK: 'chainlink',
  LRC: 'loopring',
  LTC: 'litecoin',
  MANA: 'decentraland',
  MATIC: 'polygon',
  MKR: 'maker',
  NMR: 'numeraire',
  NU: 'nucypher',
  OMG: 'omg-network',
  OXT: 'orchid',
  REN: 'ren',
  REP: 'augur',
  SKL: 'skale',
  SNX: 'synthetix-network-token',
  SUSHI: 'sushiswap',
  UMA: 'uma',
  UNI: 'uniswap',
  USDC: 'usdc',
  WBTC: 'wrapped-bitcoin',
  XLM: 'stellar',
  XTZ: 'tezos',
  YFI: 'yearn-finance',
  ZEC: 'zcash',
  ZRX: '0x',
};

export const ACCEPTED_COINS = [
  'AAVE',
  'ALGO',
  'ATOM',
  'BAL',
  'BAT',
  'BAND',
  'BCH',
  'BNT',
  'CGLD',
  'COMP',
  'CVC',
  'DASH',
  'DNT',
  'EOS',
  'ETC',
  'ETH',
  'FIL',
  'GRT',
  'KNC',
  'LINK',
  'LRC',
  'LTC',
  'MANA',
  'MATIC',
  'MKR',
  'NMR',
  'NU',
  'OMG',
  'OXT',
  'REN',
  'REP',
  'SKL',
  'SNX',
  'SUSHI',
  'UMA',
  'UNI',
  'WBTC',
  'XLM',
  'XTZ',
  'YFI',
  'ZEC',
  'ZRX',
];