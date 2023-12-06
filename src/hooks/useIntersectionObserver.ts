import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  onIntersect: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({ onIntersect, options }: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, options);
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, target, options]);

  return { setTarget };
};

export default useIntersectionObserver;
