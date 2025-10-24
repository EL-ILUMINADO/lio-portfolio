import { FaGithub } from "react-icons/fa";
import logo from "../assets/profile-logo/logo.jpg";
import Resume from "../assets/resume/PDFLawrenceResume.pdf";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Image/Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
          </div>

          {/* Center: Name */}
          <div className="text-xl font-bold text-white">L.I.O</div>

          {/* Right: Resume + GitHub */}
          <div className="flex items-center gap-4">
            <a
              href={Resume}
              download="Lawrence-Imana-Resume.pdf"
              className="inline-block px-4 py-2 rounded bg-amber-700 text-white font-medium hover:bg-500-700 transition-colors"
              aria-label="Download resume (PDF)"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/EL-ILUMINADO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
