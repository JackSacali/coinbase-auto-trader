export function clickOn(selector: string): void {
  const checkIfElementExist = setInterval(() => {
    const element: HTMLElement = document.querySelector(selector);
    if (element) {
      element.click();
      clearInterval(checkIfElementExist);
    }
  }, 100);
};

export function delay(ms) {
  return new Promise(res => {
    console.log('Waiting... ', ms);
    return setTimeout(res, ms);
  });
}

export function fillAmount(amount) {
  const checkIfElementExist = setInterval(() => {
    const element = document.querySelector('[data-element-handle="foldertab-active"] input');
    if (element) {
      setNativeValue(element, amount);
      element.dispatchEvent(new Event('input', { bubbles: true }));
      console.log(element);
      clearInterval(checkIfElementExist);
    }
  }, 100);
}

function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}

