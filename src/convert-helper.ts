export function clickOn(selector: string): void {
  const checkIfElementExist = setInterval(() => {
    const element: HTMLElement | null = document.querySelector(selector);
    if (element) {
      element.click();
      clearInterval(checkIfElementExist);
    }
  }, 100);
};

export function delay(ms: number) {
  return new Promise(res => {
    console.log('⏳ Waiting... ', ms);
    return setTimeout(res, ms);
  });
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

// export function setNativeValue(element: HTMLInputElement | null, value: string | number): void {
//   const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
//   const prototype = Object.getPrototypeOf(element);
//   const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

//   if (valueSetter && valueSetter !== prototypeValueSetter) {
//     prototypeValueSetter?.call(element, value);
//   } else {
//     valueSetter?.call(element, value);
//   }

//   element?.dispatchEvent(new Event('input', { bubbles: true }));
// }

