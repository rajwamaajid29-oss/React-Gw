import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      className="fixed inset-0 bg-neutral-900 flex items-center justify-center z-[9999]"
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-amber-400"
      >
        RDM
      </motion.h1>
    </motion.div>
  );
}