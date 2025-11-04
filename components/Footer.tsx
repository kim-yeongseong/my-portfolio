export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Portfolio. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#studies"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Studies
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
