import { useEffect, useRef, useState } from "react";

export default function TransitionLeft({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1800 transform ${
        isVisible ? "opacity-100 translate-x-10" : "opacity-0 -translate-x-10"
      }`}
    >
      {children}
    </div>
  );
}
