import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import webPorto from "../assets/web porto.png";
import webBaru from "../assets/web baru.png";
import webLukis from "../assets/web lukis.png";
import uxSls from "../assets/ux sls.png";
import uxTahfidz from "../assets/ux tahfidz.png";
import bankSampah from "../assets/bank sampah.png";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Web Portfolio",
      category: "Web",
      desc: "Website portfolio pertama saya.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: webPorto,
      code: "https://rajwamaajid29-oss.github.io/web-Rajwa/",
    },
    {
      title: "Web Portfolio 2",
      category: "Web",
      desc: "Portfolio modern dengan React.",
      tech: ["React", "Tailwind", "Vite"],
      image: webBaru,
      code: "https://rajwamaajid29-oss.github.io/React-Gw/",
    },
    {
      title: "Art Portfolio & Booking",
      category: "Web",
      desc: "Website jasa lukis & booking online.",
      tech: ["HTML", "CSS", "JS"],
      image: webLukis,
      code: "https://rajwamaajid29-oss.github.io/Portfolio-Tiara/",
    },
    {
      title: "Bank Sampah Digital",
      category: "Laravel",
      desc: "Aplikasi manajemen bank sampah.",
      tech: ["Laravel", "PHP", "MySQL"],
      image: bankSampah,
      code: "https://github.com/ThoriqMuplihFarikhin/trash-bank-1",
    },
    {
      title: "UX SLS App",
      category: "UI/UX",
      desc: "Prototype aplikasi santri.",
      tech: ["Figma"],
      image: uxSls,
      code: "https://www.figma.com/proto/SrNhaR5qMHzQ2pJBeXy6sO/Skillage-learning-system?node-id=31-3&t=IRiaDybXEeUnvxgp-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A3",
    },
    {
      title: "UX Tahfidz App",
      category: "UI/UX",
      desc: "Design aplikasi tahfidz modern.",
      tech: ["Figma"],
      image: uxTahfidz,
      code: "https://www.figma.com/proto/hpGHMZoCb2BDVgMCLOnnjp/E-Tahfidz?node-id=4-2576&t=6y6k1e36hiEO3dXF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2576&show-proto-sidebar=1",
    },
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-stone-950 text-stone-200 py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-4xl text-stone-100 mb-4"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-400 leading-relaxed max-w-xl mb-10"
        >
          Beberapa project yang pernah saya buat, dari website portfolio,
          aplikasi Laravel, sampai desain UI/UX.
        </motion.p>

        {/* FILTER */}
        <div className="flex gap-3 flex-wrap mb-14">
          {["All", "Web", "UI/UX", "Laravel"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-5 py-2 rounded-md text-sm border transition-colors ${
                filter === btn
                  ? "border-amber-400 text-amber-300"
                  : "border-stone-700 text-stone-400 hover:border-stone-500"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* GRID — 3 ACROSS */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group border border-white/10 rounded-md overflow-hidden hover:border-amber-400/40 transition-colors"
              >
                {/* IMAGE — "View Project" diam di tengah lewat overlay, tidak ikut cursor */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {project.code && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-stone-100 text-stone-950 rounded-md text-sm font-medium hover:scale-105 transition"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg text-stone-100 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-stone-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full border border-white/10 text-stone-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}