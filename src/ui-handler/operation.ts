import { SELECTORS } from "../constants";

export function displayOperation(text: string) {
  // Make sure <operation> is loaded
  const checkIfOperationExist = setInterval(() => {
    const operation = document.getElementById(SELECTORS.UI_OPERATION);
    if (operation) {
      operation.innerHTML = text;
      clearInterval(checkIfOperationExist);
    }

  }, 100);
}