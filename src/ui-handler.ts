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
    console.log('Waiting... ', ms);
    return setTimeout(res, ms);
  });
}

export function fillAmount(amount: string | number) {
  const checkIfElementExist = setInterval(() => {
    const element: HTMLElement | null = document.querySelector('[data-element-handle="foldertab-active"] input');
    if (element) {
      setNativeValue(element, amount);
      element.dispatchEvent(new Event('input', { bubbles: true }));
      console.log(element);
      clearInterval(checkIfElementExist);
    }
  }, 100);
}

function setNativeValue(element: HTMLElement | null, value: string | number) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter?.call(element, value);
  } else {
    valueSetter?.call(element, value);
  }
}

