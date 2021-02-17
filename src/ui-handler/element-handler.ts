import { ElementParams } from '../interfaces';

export function generateElement(nodes: ElementParams): HTMLElement {
  const mainParent = createElement(nodes);

  if (nodes.children) {
    nodes.children.forEach((child: ElementParams) => {
      const childElement = generateElement(child);
      mainParent.appendChild(childElement);
    });
  }

  return mainParent;
}

export function createElement(options: ElementParams): HTMLElement {
  const element: HTMLElement = document.createElement(options.tag || 'div');

  if (options.id) {
    element.id = options.id;
  }

  if (options.classes) {
    options.classes.forEach((c) => {
      element.classList.add(c);
    });
  }

  if (options.styles) {
    const styles = options.styles.map(style => {
      const styleProperty = Object.keys(style)[0];
      return `${styleProperty}:${style[styleProperty]};`;
    }).join('');
    
    element.setAttribute('style', styles);
  }

  if (options.attributes) {
    options.attributes.forEach((att) => {
      const attName = Object.keys(att)[0];

      element.setAttribute(attName, att[attName]);
    });
  }
  if (options.innerHTML) {
    element.innerHTML = options.innerHTML;
  }

  return element;
}

export function closeElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}
