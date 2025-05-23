import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollLayout: React.FC = () => {
  // Scroll global de la ventana
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="flex w-full min-h-screen">
      {/* Columna izquierda */}
      <div className="flex-1 p-4">
        <motion.div
          className="sticky top-0"
          style={{ y }}
          transition={{ type: "spring", stiffness: 40 }}
        >
          <img
	    src="/img/edifici_nou.jpg" 
            alt="Izquierda"
            className="w-full rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Columna central */}
      <div className="flex-1 p-4">
        <motion.div
          className="sticky top-0"
          style={{ y }}
          transition={{ type: "spring", stiffness: 40 }}
        >
          <img src="/img/edifici_nou.jpg" 
            alt="Central"
            className="w-full rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Columna derecha (contenido largo sin scroll interno) */}
      <div className="flex-[1.5] p-4 border-l space-y-4">
        {[...Array(100)].map((_, i) => (
          <p key={i} className="text-gray-800 leading-relaxed">
            Esto es una línea descriptiva muy larga para la columna derecha. Línea #{i + 1}.
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollLayout;

