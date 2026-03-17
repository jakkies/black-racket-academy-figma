import imgBraLogo1 from "../../assets/fc7eba42a06ea4c739f6234764a8c6a19add32e0.png";

export function Navigation({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="w-[200px] md:w-[250px] cursor-pointer block">
            <img src={imgBraLogo1} alt="Black Racket Academy" className="w-full h-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white text-sm uppercase hover:text-[#d3e83d] transition-colors">
              About
            </a>
            <a href="#programs" className="text-white text-sm uppercase hover:text-[#d3e83d] transition-colors">
              Programs
            </a>
            <a href="#philosophy" className="text-white text-sm uppercase hover:text-[#d3e83d] transition-colors">
              Philosophy
            </a>
            <a href="#contact" className="text-white text-sm uppercase hover:text-[#d3e83d] transition-colors">
              Contact
            </a>
            <button 
              onClick={onJoinClick}
              className="bg-[#d3e83d] text-black px-6 py-2 font-bold text-sm hover:bg-[#c5d639] transition-colors"
            >
              JOIN TODAY!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
