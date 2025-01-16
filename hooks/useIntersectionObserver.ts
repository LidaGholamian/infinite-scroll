import { useEffect, useRef } from "react";

export const useIntersectionObserver = (
  loading: boolean,
  hasMore: boolean,
  callback: () => void
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 1.0, 
    };

    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading && hasMore) {
        callback();
      }
    };

    if (loadingRef.current) {
      observerRef.current = new IntersectionObserver(intersectionCallback, options);
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current && loadingRef.current) {
        observerRef.current.unobserve(loadingRef.current);
      }
    };
  }, [loading, hasMore, callback]);

  return loadingRef;
};
