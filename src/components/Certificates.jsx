import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import sertiBackend from "../assets/serti backend.jpeg";
import sertiDatabase from "../assets/serti database.jpeg";
import sertiFrontend from "../assets/serti web frontend.jpeg";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  const certificates = [
    {
      title: "Backend Development",
      desc: "REST API, Express JS, Authentication & Database",
      image: sertiBackend,
      issuer: "SMK Skill Village Islamic School",
      year: "2026",
    },
    {
      title: "Database Engineering",
      desc: "MySQL, Relational Database & Query Optimization",
      image: sertiDatabase,
      issuer: "SMK Skill Village Islamic School",
      year: "2026",
    },
    {
      title: "Frontend Development",
      desc: "Modern Interface Design using React & JavaScript",
      image: sertiFrontend,
      issuer: "SMK Skill Village Islamic School",
      year: "2026",
    },
  ];

  return (
    <section
      id="certificates"
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
          Certificates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-400 leading-relaxed max-w-xl mb-14"
        >
          Sertifikat dan pencapaian yang menunjukkan pengalaman belajar saya
          di bidang frontend, backend, dan database.
        </motion.p>

        {/* GRID — 3 ACROSS */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-white/10 rounded-md overflow-hidden hover:border-amber-400/40 transition-colors"
            >
              {/* IMAGE — no darkening */}
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>

                <h3 className="text-lg text-stone-100 group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-stone-400 text-sm mt-3 leading-relaxed">
                  {cert.desc}
                </p>

                <button
                  onClick={() => setSelected(cert)}
                  className="mt-6 w-full py-3 border border-stone-700 rounded-md text-stone-300 hover:border-amber-400 hover:text-amber-300 transition-colors"
                >
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xl flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-md overflow-hidden border border-white/10 bg-stone-950"
            >
              {/* TOP IMAGE */}
              <div className="relative h-[70vh] overflow-hidden bg-black">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain"
                />

                {/* subtle fade for text legibility only */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-stone-950/70 backdrop-blur-md border border-white/20 text-2xl text-stone-200 hover:border-amber-400 hover:text-amber-300 transition-colors"
                >
                  ×
                </button>

                {/* FLOATING INFO */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="absolute bottom-0 left-0 w-full p-10"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                    <span className="px-4 py-1 rounded-full border border-amber-400/40 text-amber-300">
                      {selected.issuer}
                    </span>
                    <span className="px-4 py-1 rounded-full border border-white/10 text-stone-300">
                      {selected.year}
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl md:text-5xl text-stone-100">
                    {selected.title}
                  </h2>

                  <p className="text-stone-300 mt-4 max-w-2xl leading-relaxed">
                    {selected.desc}
                  </p>
                </motion.div>
              </div>

              {/* BOTTOM ACTION */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-t border-white/10">
                <p className="text-stone-500 text-sm">
                  Certified Professional Achievement
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-2 rounded-md border border-white/10 text-stone-300 hover:border-stone-500 transition-colors"
                  >
                    Close
                  </button>

                  <a
                    href={selected.image}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-md bg-amber-400 hover:bg-amber-300 text-stone-950 font-medium transition-colors"
                  >
                    Full Preview
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}