/**
 * Resolve function callback with delay
 */
export function delayed<T>(fn: () => T, timeMs = 1000): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fn());
      } catch (error) {
        reject(error);
      }
    }, timeMs);
  });
}
