import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-stone-950 text-stone-200 flex items-center px-6"
    >
      <div className="max-w-5xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-stone-500 mb-4"
        >
          Fullstack Developer · Bogor, Indonesia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-stone-100"
        >
          Rajwa Dhia Maajid
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-lg md:text-xl text-stone-400"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "React & Laravel Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-stone-400 max-w-xl leading-relaxed"
        >
          Membangun website modern, cepat, dan nyaman digunakan — dari
          antarmuka sampai backend-nya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center gap-5 text-2xl text-stone-500"
        >
          <a
            href="https://www.instagram.com/rajt.zy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rajwa-dhia-maajid-639201392/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rajwamaajid29-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors"
          >
            <FaGithub />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-400 text-stone-950 font-medium rounded-md hover:bg-amber-300 transition-colors"
          >
            Lihat Proyek
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-stone-700 text-stone-300 font-medium rounded-md hover:border-stone-500 transition-colors"
          >
            Hubungi Saya
          </a>
        </motion.div>
      </div>
    </section>
  );
}