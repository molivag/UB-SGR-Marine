import { useEffect, useState } from "react";
import { CircleChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-2 z-50 p-3 bg-UBfoothead text-white rounded-full shadow-md transition-opacity ${
        isVisible ? "opacity-50" : "opacity-0"
      }`}
    >
      <CircleChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;

