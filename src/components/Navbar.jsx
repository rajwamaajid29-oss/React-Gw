export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-900/80 backdrop-blur-md text-white px-6 py-4 grid grid-cols-3 items-center z-50 shadow-lg">

      <a href="#home" className="font-serif text-xl tracking-wide text-amber-400 justify-self-start">
        RDM
      </a>

      <div className="hidden md:flex gap-6 justify-self-center">
        <a href="#home" className="hover:text-amber-400 transition">Home</a>
        <a href="#about" className="hover:text-amber-400 transition">About</a>
        <a href="#skills" className="hover:text-amber-400 transition">Skills</a>
        <a href="#education" className="hover:text-amber-400 transition">Education</a>
        <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
        <a href="#certificates" className="hover:text-amber-400 transition">Certificates</a>
      </div>

      <a
        href="#contact"
        className="justify-self-end px-5 py-2 rounded-md text-sm border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-stone-950 transition-colors"
      >
        Contact
      </a>

    </nav>
  );
}