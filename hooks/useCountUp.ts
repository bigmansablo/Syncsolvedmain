import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 → target using requestAnimationFrame.
 * Triggered by `trigger` boolean (from useScrollReveal).
 */
export function useCountUp(target: number, duration = 1800, trigger = false): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic for a decelerating feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);

  return value;
}
