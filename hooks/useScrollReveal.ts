import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a `.revealed` class when element scrolls into view.
 * Uses IntersectionObserver — fires once per element.
 */
export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
