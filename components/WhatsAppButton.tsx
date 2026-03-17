"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "918282859551";
  const message =
    "Hi, I am interested in automation solutions for my business.";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.8],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Button */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative flex items-center gap-3 bg-green-500 text-black px-4 py-3 rounded-full shadow-lg hover:bg-green-400 transition"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.87.5 3.68 1.45 5.26L2 22l4.93-1.52a9.9 9.9 0 005.11 1.4h.01c5.48 0 9.94-4.46 9.94-9.94S17.52 2 12.04 2zm5.76 14.16c-.24.67-1.41 1.28-1.94 1.36-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.36-.14-.2-1.18-1.56-1.18-2.98 0-1.41.74-2.1 1-2.38.27-.27.59-.34.79-.34.2 0 .4 0 .57.01.18.01.43-.07.67.5.24.6.82 2.06.89 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.37-.44.5-.15.15-.3.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.74-.86.94-1.15.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.34.07.12.07.69-.17 1.36z" />
        </svg>

        <span className="hidden sm:block text-sm font-medium">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
