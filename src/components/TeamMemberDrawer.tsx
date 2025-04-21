import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaOrcid, FaTwitter, FaEnvelope } from "react-icons/fa";
import Tmember from "../types/Tmember";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  member: Tmember | null;
};

function MemberDrawer({ isOpen, onClose, member }:DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && member && (
        <>
          {/* Fondo oscuro */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 "
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer lateral */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full sm:w-[600px] bg-white z-50 shadow-xl p-6 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black text-2xl absolute top-4 right-4"
            >
              &times;
            </button>

            <div className="mt-10 flex flex-col items-center text-center">
              <img
		src={`img/team/${member.imageID}.jpg`}
                alt={member.name}
                className="w-80 h-80 rounded-md object-cover  shadow-md mb-4"
              />
              <h2 className="h3member font-bold">{member.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{member.category}</p>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Redes sociales */}
              <div className="flex gap-4">
                {member.scholar && (
                  <a
                    href={member.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-blue-800"
                  >
                    <FaOrcid size={20} />
                  </a>
                )}
                {member.socialmedia && (
                  <a
                    href={member.socialmedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:text-sky-700"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


export default MemberDrawer
