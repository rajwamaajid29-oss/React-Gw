import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaFigma,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import { SiMysql, SiPhp } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={32} className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact size={32} className="text-cyan-400" /> },
    { name: "Laravel", icon: <FaLaravel size={32} className="text-red-500" /> },
    { name: "PHP", icon: <SiPhp size={32} className="text-indigo-400" /> },
    { name: "MySQL", icon: <SiMysql size={32} className="text-blue-400" /> },
    { name: "Figma", icon: <FaFigma size={32} className="text-pink-500" /> },
    { name: "GitHub", icon: <FaGithub size={32} className="text-stone-300" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={32} className="text-purple-400" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-stone-950 text-stone-200 py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-4xl text-stone-100 mb-4"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-400 leading-relaxed max-w-xl mb-14"
        >
          Tools dan bahasa yang biasa saya pakai untuk membangun sebuah
          website, dari sisi tampilan sampai ke database-nya.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-3 border border-white/10 rounded-md py-8 px-4 hover:border-amber-400/40 transition-colors"
            >
              {skill.icon}
              <p className="text-sm text-stone-400">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}