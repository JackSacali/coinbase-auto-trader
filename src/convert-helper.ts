import { displayTimer } from "./ui-handler";

export function clickOn(selector: string): void {
  const checkIfElementExist = setInterval(() => {
    const element: HTMLElement | null = document.querySelector(selector);
    if (element) {
      element.click();
      clearInterval(checkIfElementExist);
    }
  }, 100);
};

export function delay(milliseconds: number) {
  return new Promise(res => {
    let ms = milliseconds;

    const runTimer = setInterval(() => {
      displayTimer(convertToTime(ms));
      ms = ms - 1000;
      if (ms <= 0) {
        clearInterval(runTimer);
      }
    }, 1000);

    return setTimeout(res, milliseconds);
  });
}

function convertToTime(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);

  const leftSide = (seconds == '60') ? (minutes + 1) : minutes;
  const rightSide = (seconds == '60') ? '00' : (seconds.length === 1 ? "0" : "") + seconds;
  
  return `${leftSide}:${rightSide}`;
}

export function fillAmount(amount: string | number) {
  const checkIfElementExist = setInterval(() => {
    const element: HTMLInputElement | null = document.querySelector('[data-element-handle="foldertab-active"] input');
    if (element) {
      // (window as any).CoinbaseAutoTrader.setNativeValue(element, amount);
      const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
      const prototype = Object.getPrototypeOf(element);
      const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

      if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter?.call(element, amount);
      } else {
        valueSetter?.call(element, amount);
      }

      element.dispatchEvent(new Event('input', { bubbles: true }));

      clearInterval(checkIfElementExist);
    }
  }, 100);
}
