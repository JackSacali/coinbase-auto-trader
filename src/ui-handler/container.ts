import { ElementParams } from "../interfaces";
import { SELECTORS } from "../constants";
import { generateElement } from "./element-handler";

export function createContainer() {
  const nodes: ElementParams = {
    id: SELECTORS.UI_CONTAINER,
    styles: [
      { position: 'fixed' },
      { display: 'flex' },
      { 'flex-direction': 'column' },
      { 'align-items': 'center' },
      { width: '236px' },
      { height: '80px' },
      { padding: '10px' },
      { bottom: '0' },
      { left: '0' },
      { 'background-color': 'rgba(10, 70, 228, 0.5)' },
      { color: '#FFFFFF' },
      { 'z-index': '999999999' },
      { 'text-align': 'center' },
    ],
    children: [
      {
        id: SELECTORS.UI_OPERATION,
        styles: [
          { width: '100%' },
          { height: '50%' },
        ],
      },
      {
        id: SELECTORS.UI_TIMER,
        styles: [
          { width: '100%' },
          { height: '50%' },
        ],
      }
    ],
  };

  const container = generateElement(nodes);

  // Make sure <body> is loaded
  const checkIfBodyExist = setInterval(() => {
    if (document.body) {
      document.body.appendChild(container);
      clearInterval(checkIfBodyExist);
    }
  }, 100);
}
