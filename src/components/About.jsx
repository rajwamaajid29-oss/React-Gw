import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import profileImg from "../assets/my.png";
import cvPdf from "../assets/cv.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="bg-stone-950 text-stone-200 py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-16 items-start">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={profileImg}
            alt="Rajwa"
            drag
            dragConstraints={{ top: -25, left: -25, right: 25, bottom: 25 }}
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
            dragSnapToOrigin
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileTap={{ scale: 0.97, cursor: "grabbing" }}
            className="w-full rounded-md border border-white/10 grayscale hover:grayscale-0 transition-[filter] duration-500 cursor-grab active:cursor-grabbing touch-none"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-stone-100 mb-6">
            About Me
          </h2>

          <p className="text-stone-400 leading-relaxed max-w-xl">
            Halo, saya Rajwa Dhia Maajid, seorang Fullstack Developer dari
            Bogor yang berfokus pada pembuatan website modern, cepat,
            responsive, dan interaktif. Saya suka membangun UI yang rapi,
            backend yang solid, dan pengalaman digital yang nyaman digunakan.
          </p>

          <div className="flex gap-10 mt-8 border-t border-white/10 pt-6">
            <div>
              <p className="text-stone-500 text-sm">Age</p>
              <p className="text-stone-200 text-lg mt-1">17 Years Old</p>
            </div>

            <div>
              <p className="text-stone-500 text-sm">Location</p>
              <p className="text-stone-200 text-lg mt-1">Bogor, Indonesia</p>
            </div>
          </div>

          <a
            href={cvPdf}
            download
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 border border-stone-700 rounded-md text-stone-300 hover:border-amber-400 hover:text-amber-300 transition-colors"
          >
            <FaDownload size={14} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}