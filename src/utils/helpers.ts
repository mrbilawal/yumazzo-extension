import { twMerge } from "tailwind-merge";

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timerId: NodeJS.Timeout;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export const cls = (...classes: (string | undefined)[]): string => {
  return twMerge(...classes.filter(Boolean));
};
