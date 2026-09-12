import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import sertiBackend from "../assets/serti backend.jpeg";
import sertiDatabase from "../assets/serti database.jpeg";
import sertiFrontend from "../assets/serti web frontend.jpeg";

import sertiBackendBack from "../assets/Belakang Serti Backend.png";
import sertiDatabaseBack from "../assets/Belakang Serti Database.png";
import sertiFrontendBack from "../assets/Belakang Serti Frontend.png";

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { images: [depan, belakang], labels: [...], index }

  const openLightbox = (cert, index = 0) => {
    setLightbox({
      images: [cert.image, cert.imageBack],
      labels: ["Tampak Depan", "Tampak Belakang"],
      index,
    });
  };

  const nextImage = () =>
    setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

  const prevImage = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index - 1 + lb.images.length) % lb.images.length,
    }));

  // Kunci scroll halaman di belakang saat modal / lightbox terbuka
  useEffect(() => {
    if (selected || lightbox) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [selected, lightbox]);

  // Navigasi dengan keyboard saat lightbox terbuka
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const certificates = [
    {
      title: "Backend Development",
      desc: "PHP, OOP, Laravel MVC & Filament Admin Dashboard",
      details:
        "Sertifikat ini membuktikan kemampuan dalam pengembangan backend menggunakan PHP dan framework Laravel, mulai dari dasar sintaks hingga penerapan struktur MVC, relasi database dengan Eloquent, sampai pembuatan dashboard admin menggunakan Filament.",
      skills: [
        "Memahami dasar sintaks PHP",
        "Memahami konsep dasar OOP di PHP",
        "Menggunakan sistem kontrol versi Git",
        "Memahami struktur MVC project Laravel",
        "Mengatur route dan controller Laravel",
        "Instalasi & mengatur dashboard admin menggunakan Filament",
        "Membuat migrasi & database Laravel",
        "Mendesign Eloquent Relationship",
        "Membuat CRUD menggunakan Filament",
        "Menyesuaikan tabel dan form Filament",
      ],
      image: sertiBackend,
      imageBack: sertiBackendBack,
      issuer: "Skillage",
      year: "2025",
    },
    {
      title: "Database Engineering",
      desc: "Database, SQL, Relasi Tabel & Query Optimization",
      details:
        "Sertifikat ini membuktikan pemahaman tentang perancangan basis data, mulai dari konsep dasar dan jenis database, penulisan query SQL (DDL & DML), perancangan relasi antar tabel, penerapan join statement, hingga pemahaman constraint dan indexing data.",
      skills: [
        "Mengenal konsep dasar dan jenis Database",
        "Menggunakan dasar SQL Data Definition Language",
        "Menggunakan dasar SQL Data Manipulation Language",
        "Mendesign relasi antar tabel database",
        "Menerapkan Join Statement antar tabel",
        "Memahami jenis Constraint & Indexing data",
      ],
      image: sertiDatabase,
      imageBack: sertiDatabaseBack,
      issuer: "Skillage",
      year: "2025",
    },
    {
      title: "Frontend Development",
      desc: "HTML, CSS, Responsive Design & Framework CSS",
      details:
        "Sertifikat ini menunjukkan kemampuan membangun antarmuka web menggunakan HTML dan CSS, mulai dari dasar-dasar markup dan styling, penerapan responsive design, pemahaman layout modern dalam CSS, penggunaan framework CSS, hingga penggunaan sistem kontrol versi Git.",
      skills: [
        "Menggunakan dasar HTML",
        "Menerapkan dasar CSS",
        "Memahami responsive design dasar website",
        "Memahami layout modern dalam CSS",
        "Menggunakan manfaat framework CSS",
        "Menggunakan sistem kontrol versi Git",
      ],
      image: sertiFrontend,
      imageBack: sertiFrontendBack,
      issuer: "Skillage",
      year: "2025",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-stone-950 text-stone-200 py-16 sm:py-20 md:py-28 px-4 sm:px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl text-stone-100 mb-4"
        >
          Certificates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-400 leading-relaxed max-w-xl mb-10 sm:mb-14"
        >
          Sertifikat dan pencapaian yang menunjukkan pengalaman belajar saya
          di bidang frontend, backend, dan database.
        </motion.p>

        {/* GRID — RESPONSIVE: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-white/10 rounded-md overflow-hidden hover:border-amber-400/40 transition-colors flex flex-col h-full"
            >
              {/* IMAGE — hanya tampak depan sebelum dibuka, full terlihat (tidak terpotong) */}
              <button
                type="button"
                onClick={() => openLightbox(cert, 0)}
                className="bg-stone-100 p-3 sm:p-4 w-full"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 sm:h-56 object-contain group-hover:scale-105 transition duration-500"
                />
              </button>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex-1">
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
                </div>

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
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] flex flex-col rounded-2xl border border-white/10 bg-stone-900 shadow-2xl shadow-black/50 overflow-hidden"
            >
              {/* HEADER — fixed */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-6 border-b border-white/10 bg-stone-900/95">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                    <span className="px-3 py-1 rounded-full border border-amber-400/40 text-amber-300">
                      {selected.issuer}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-white/10 text-stone-400">
                      {selected.year}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-100 truncate">
                    {selected.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="shrink-0 w-9 h-9 rounded-full border border-white/10 text-lg text-stone-300 hover:border-amber-400 hover:text-amber-300 transition-colors"
                >
                  ×
                </button>
              </div>

              {/* BODY — scrollable */}
              <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {/* IMAGES — depan & belakang */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <p className="text-[11px] font-medium uppercase tracking-widest text-stone-400">
                        Tampak Depan
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openLightbox(selected, 0)}
                      className="block w-full"
                    >
                      <div className="rounded-lg overflow-hidden bg-stone-100 border border-white/10 hover:border-amber-400/50 transition-colors p-2 sm:p-3">
                        <img
                          src={selected.image}
                          alt={`${selected.title} - depan`}
                          className="w-full h-[42vh] sm:h-[52vh] object-contain mx-auto"
                        />
                      </div>
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <p className="text-[11px] font-medium uppercase tracking-widest text-stone-400">
                        Tampak Belakang
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openLightbox(selected, 1)}
                      className="block w-full"
                    >
                      <div className="rounded-lg overflow-hidden bg-stone-100 border border-white/10 hover:border-amber-400/50 transition-colors p-2 sm:p-3">
                        <img
                          src={selected.imageBack}
                          alt={`${selected.title} - belakang`}
                          className="w-full h-[42vh] sm:h-[52vh] object-contain mx-auto"
                        />
                      </div>
                    </button>
                  </div>
                </div>

                {/* PENJELASAN */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-amber-300 mb-3">
                    Penjelasan
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {selected.details}
                  </p>
                </div>

                {/* SKILLS */}
                {selected.skills && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-amber-300 mb-3">
                      Daftar Kompetensi
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {selected.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-stone-300 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* FOOTER — fixed */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-t border-white/10 bg-stone-900/95">
                <p className="text-stone-500 text-xs hidden sm:block">
                  Certified Professional Achievement
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-md border border-white/10 text-sm text-stone-300 hover:border-stone-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX — full image viewer dengan navigasi depan/belakang */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            {/* CLOSE */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-stone-900/80 border border-white/20 text-xl text-stone-200 hover:border-amber-400 hover:text-amber-300 transition-colors z-10"
            >
              ×
            </button>

            {/* LABEL */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1 rounded-full bg-stone-900/80 border border-white/20 text-xs text-stone-300 z-10">
              {lightbox.labels[lightbox.index]}
            </div>

            {/* PREV */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-900/80 border border-white/20 text-2xl text-stone-200 hover:border-amber-400 hover:text-amber-300 transition-colors flex items-center justify-center z-10"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-900/80 border border-white/20 text-2xl text-stone-200 hover:border-amber-400 hover:text-amber-300 transition-colors flex items-center justify-center z-10"
            >
              ›
            </button>

            {/* IMAGE */}
            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full bg-stone-100 rounded-lg p-3 sm:p-4"
            >
              <img
                src={lightbox.images[lightbox.index]}
                alt={lightbox.labels[lightbox.index]}
                className="max-w-[85vw] max-h-[80vh] object-contain mx-auto"
              />
            </motion.div>

            {/* DOTS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {lightbox.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((lb) => ({ ...lb, index: idx }));
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === lightbox.index ? "bg-amber-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}