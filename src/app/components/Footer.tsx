import imgFbGreenIcon2 from "../../assets/de4038d71f1e7e548bd2bb92dc27c17a25d1f4e6.png";
import svgPaths from "../../imports/svg-1o83iag117";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-black font-bold mb-2">SOCIAL</h4>
            <p className="text-gray-500 mb-4">Follow Liam_Swart06 on Instagram & Facebook</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/liam_swart06/" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 44.003 43.9999">
                  <path d={svgPaths.p111a1600} fill="#D3E83D" />
                  <path d={svgPaths.p1ad335f0} fill="#D3E83D" />
                  <path d={svgPaths.p18709c80} fill="#D3E83D" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={imgFbGreenIcon2} alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-black font-bold mb-4">CONTACT</h4>
            <p className="text-gray-500 mb-2"><a href="mailto:coachliam@blackracketacademy.co.za" class="text-[#d3e83d]">coachliam@blackracketacademy.co.za</a></p>
            <p className="text-gray-500"><a href="https://wa.me/27722211485" target="_blank" class="text-[#d3e83d]">WhatsApp Coach Liam on +27 72 221 1485</a></p>
          </div>

          <div>
            <h4 className="text-black font-bold mb-4">HOURS</h4>
            <p className="text-gray-500 mb-2">Mon-Fri: 6am - 4pm</p>
            <p className="text-gray-500">Sat: 8am - 4pm</p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Black Racket Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer >
  );
}
