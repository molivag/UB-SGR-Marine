import { motion, AnimatePresence } from "framer-motion";
import {
  FaOrcid,
  FaLinkedin,
  // FaInstagram,
  // FaEnvelope,
  FaSquareInstagram,
  FaGlobe,
  FaBluesky,
  FaGoogleScholar,
} from "react-icons/fa6";
import Tmember from "../types/Tmember";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  member: Tmember | null;
};

function MemberDrawer({ isOpen, onClose, member }: DrawerProps) {
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
              className="text-gray-500 hover:text-black text-7xl absolute top-0 right-3"
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

              <p className="text-gray-900 text-md leading-relaxed mb-6 whitespace-pre-line text-justify">
                {member.description}
              </p>

              {/* Redes sociales */}
              <div className="flex gap-6">
                {/* website */}
                {member.website &&
                  member.website.trim() !== "" ? (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800"
                  >
                    <FaGlobe size={30} />
                  </a>
                ) : null}

                {/* Instagram */}
                {member.socialmedia_INSTA &&
                  member.socialmedia_INSTA.trim() !== "" ? (
                  <a
                    href={member.socialmedia_INSTA}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="text-violet-700 hover:text-fuchsia-900"
                  >
                    <FaSquareInstagram size={30} />
                    {/* <img */}
                    {/*   src="img/Insta.svg" */}
                    {/*   alt="Instagram" */}
                    {/*   className="w-7 h-7 hover:grayscale transition duration-300 cursor-pointer" */}
                    {/* /> */}
                  </a>
                ) : null}

                {/* LinkedIn */}
                {member.socialmedia_IN &&
                  member.socialmedia_IN.trim() !== "" ? (
                  <a
                    href={member.socialmedia_IN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin size={30} />
                  </a>
                ) : null}

                {/* Google Scholar */}
                {member.scholar && member.scholar.trim() !== "" ? (
                  <a
                    href={member.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-700"
                  >
                    <FaGoogleScholar size={30} />
                  </a>
                ) : null}

                {/* ORCID */}
                {member.orcid && member.orcid.trim() !== "" ? (
                  <a
                    href={member.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaOrcid size={30} />
                  </a>
                ) : null}

                {/* Bluesky */}
                {member.socialmedia_BSKY &&
                  member.socialmedia_BSKY.trim() !== "" ? (
                  <a
                    href={member.socialmedia_BSKY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:text-sky-700"
                  >
                    <FaBluesky size={30} />
                  </a>
                ) : null}

                {/* Email */}
                {/*{member.email && (*/}
                {/*  <a*/}
                {/*    href={`mailto:${member.email}`}*/}
                {/*    className="text-gray-600 hover:text-gray-800"*/}
                {/*  >*/}
                {/*    <FaEnvelope size={30} />*/}
                {/*  </a>*/}
                {/*)}*/}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MemberDrawer;
