import { useState } from "react";
import imgBraLogo1 from "../../assets/fc7eba42a06ea4c739f6234764a8c6a19add32e0.png";

export function Navigation({ onJoinClick }: { onJoinClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleJoinClick = () => {
    closeMenu();
    onJoinClick();
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between relative z-[110]">
        <a href="#" onClick={closeMenu} className="w-[180px] md:w-[250px] cursor-pointer block">
          <img src={imgBraLogo1} alt="Black Racket Academy" className="w-full h-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-sm uppercase font-bold hover:text-[#d3e83d] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onJoinClick}
            className="bg-[#d3e83d] text-black px-6 py-2 font-bold text-sm hover:bg-[#c5d639] transition-colors cursor-pointer"
          >
            BOOK A SESSION
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#d3e83d] p-2 focus:outline-none relative z-[120]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[1000] bg-[#030213] flex flex-col md:hidden">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 w-full border-b border-gray-800/50">
            <a href="#" onClick={closeMenu} className="w-[180px]">
              <img src={imgBraLogo1} alt="Black Racket Academy" className="w-full h-auto" />
            </a>
            <button
              onClick={closeMenu}
              className="text-[#d3e83d] p-2 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8 text-center pb-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-white text-4xl uppercase font-black tracking-tighter hover:text-[#d3e83d] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleJoinClick}
              className="w-full max-w-xs bg-[#d3e83d] text-black py-5 font-black text-xl hover:bg-[#c5d639] transition-colors mt-6 shadow-2xl cursor-pointer"
            >
              BOOK A SESSION
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
