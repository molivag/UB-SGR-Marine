import { useEffect, useState } from "react";
import { CircleChevronUp } from "lucide-react";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const GoTop = () => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  };

  return (
    <button
      onClick={GoTop}
      className={`fixed bottom-6 right-14 z-50 p-3 bg-orange-500 text-white rounded-full shadow-md transition-opacity ${
        isVisible ? "opacity-50" : "opacity-0"
      }`}
    >
      <CircleChevronUp size={34} />
    </button>
  );
};

export default GoTop;
