import svgPaths from "../../imports/svg-1o83iag117";

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-5xl md:text-6xl font-black text-[#d3e83d] text-center mb-6">
          THE BLACK RACKET WAY
        </h2>

        <p className="text-gray-500 text-xl text-center max-w-3xl mx-auto mb-16">
          Our coaching philosophy combines expertise, discipline, and passion
          to deliver exceptional results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black border-l-4 border-[#d3e83d] p-8">
            <svg className="w-12 h-12 mb-6" fill="none" viewBox="0 0 48 48">
              <path d={svgPaths.p1f337080} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p30fa48f0} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p2626b600} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
            <h3 className="text-white text-2xl font-black mb-4">Precision Training</h3>
            <p className="text-gray-400">
              Every session is designed with clear objectives, focusing on technical
              mastery and tactical awareness.
            </p>
          </div>

          <div className="bg-black border-l-4 border-[#d3e83d] p-8">
            <svg className="w-12 h-12 mb-6" fill="none" viewBox="0 0 48 48">
              <path d="M44 14L27 31L17 21L4 34" stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d="M32 14H44V26" stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
            <h3 className="text-white text-2xl font-black mb-4">Player Development</h3>
            <p className="text-gray-400">
              We track progress meticulously, adapting our methods to maximize
              each athlete's potential.
            </p>
          </div>

          <div className="bg-black border-l-4 border-[#d3e83d] p-8">
            <svg className="w-12 h-12 mb-6" fill="none" viewBox="0 0 48 48">
              <path d={svgPaths.p2b3c4500} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p31eb3600} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p13aa6b20} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.pa8dde00} stroke="#D3E83D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
            <h3 className="text-white text-2xl font-black mb-4">Holistic Approach</h3>
            <p className="text-gray-400">
              Physical conditioning, mental strength, and strategic thinking—we develop
              complete players.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
