import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  // LOAD COMMENTS
  useEffect(() => {
    const saved = localStorage.getItem("comments");

    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  // SAVE COMMENTS
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // SUBMIT COMMENT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) return;

    const newComment = {
      name,
      message,
      time: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);

    setName("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="bg-stone-950 text-stone-200 py-28 px-6 border-t border-white/10 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-4xl text-stone-100 mb-4"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-400 leading-relaxed max-w-xl mb-14"
        >
          Ada project atau ide yang mau didiskusikan? Silakan hubungi saya
          lewat kontak di bawah, atau tinggalkan pesan.
        </motion.p>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-md overflow-hidden"
          >
            <iframe
              src="https://maps.google.com/maps?q=depok%20indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] grayscale"
              loading="lazy"
            ></iframe>

            <div className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 shrink-0 mt-1" size={22} />
                <div>
                  <p className="text-stone-500 text-sm">Lokasi</p>
                  <p className="text-stone-200 mt-1">Depok, Indonesia</p>
                </div>
              </div>

              <div className="border-t border-white/10" />

              <div className="flex items-start gap-4">
                <Mail className="text-amber-400 shrink-0 mt-1" size={22} />
                <div>
                  <p className="text-stone-500 text-sm">Email</p>
                  <p className="text-stone-200 mt-1">rajwamaajid29@gmail.com</p>
                </div>
              </div>

              <div className="border-t border-white/10" />

              <div className="flex items-start gap-4">
                <Phone className="text-amber-400 shrink-0 mt-1" size={22} />
                <div>
                  <p className="text-stone-500 text-sm">WhatsApp</p>
                  <p className="text-stone-200 mt-1">+62 852 1263 3060</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-md p-8"
          >
            <h3 className="font-serif text-2xl text-stone-100 mb-2">
              Comments
            </h3>

            <p className="text-stone-400 mb-8">
              Tinggalkan pesan terbaikmu
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 p-4 rounded-md bg-stone-950 border border-white/10 outline-none focus:border-amber-400 transition-colors text-stone-200 placeholder:text-stone-500"
              />

              <textarea
                placeholder="Tulis komentar..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full mb-4 p-4 rounded-md bg-stone-950 border border-white/10 outline-none focus:border-amber-400 transition-colors text-stone-200 placeholder:text-stone-500"
              />

              <button className="w-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2">
                <Send size={16} />
                Kirim Comment
              </button>
            </form>

            <div className="mt-8 max-h-[360px] overflow-y-auto pr-2 space-y-3">
              {comments.length === 0 && (
                <div className="border border-white/10 rounded-md p-5 text-center text-stone-500">
                  Belum ada komentar...
                </div>
              )}

              {comments.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-white/10 rounded-md p-5 hover:border-amber-400/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-amber-300">{c.name}</h4>
                    <span className="text-xs text-stone-500">{c.time}</span>
                  </div>

                  <p className="text-stone-400 leading-relaxed">
                    {c.message}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}