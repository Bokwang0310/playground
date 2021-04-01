export const getValueAfterDelay = (value: number, delay: number) =>
  new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
