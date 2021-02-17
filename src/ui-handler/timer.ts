import { SELECTORS } from "../constants";

export function displayTimer(text: string) {
  const timer = document.getElementById(SELECTORS.UI_TIMER);
  if (timer) {
    timer.innerHTML = text;
  }
}