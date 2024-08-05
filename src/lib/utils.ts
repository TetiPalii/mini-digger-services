import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothScroll = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const startPosition = window.scrollY;
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Total duration of the scroll in milliseconds
  let startTime: number | null = null;

  const easeInOutExpo = (t: number, b: number, c: number, d: number): number => {
    if (t === 0) return b;
    if (t === d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  };

  const scrollAnimation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutExpo(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  };

  requestAnimationFrame(scrollAnimation);
};
