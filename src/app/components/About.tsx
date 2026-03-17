import imgRectangle1 from "../../assets/75df0e610ff631053d6635860d5ba3d3cc8dd11d.png";
import imgDisciplineIcon1 from "../../assets/738423f8d6e2f6b0d64160860cf929c76fa155ab.png";
import imgValuesIcon1 from "../../assets/37746bd8adaab25194969add25b1fa1a9e7243ff.png";
import imgPassionIcon1 from "../../assets/8d633fa336e9232c87ee53a9d703b8ccc7eb054d.png";
import svgPaths from "../../imports/svg-1o83iag117";

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-5xl md:text-6xl font-black text-[#d3e83d] text-center mb-6">
          ABOUT BLACK RACKET
        </h2>

        <p className="text-gray-500 text-xl text-center max-w-3xl mx-auto mb-20">
          At Black Racket Academy, we believe that excellence is earned through
          unwavering discipline, solid values, and relentless passion. We don't just train
          players—we build leaders and champions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-black border-t-4 border-[#d3e83d] p-8">
            <img src={imgDisciplineIcon1} alt="Discipline" className="w-16 h-16 mb-6" />
            <h3 className="text-white text-2xl font-black mb-4">DISCIPLINE</h3>
            <p className="text-gray-400">
              Structured training regimens that build mental toughness and physical excellence.
            </p>
          </div>

          <div className="bg-black border-t-4 border-[#d3e83d] p-8">
            <img src={imgValuesIcon1} alt="Values" className="w-16 h-16 mb-6" />
            <h3 className="text-white text-2xl font-black mb-4">SOLID VALUES</h3>
            <p className="text-gray-400">
              Core biblical values that will not only raise elite athletes, but great people as well.
            </p>
          </div>

          <div className="bg-black border-t-4 border-[#d3e83d] p-8">
            <img src={imgPassionIcon1} alt="Passion" className="w-16 h-16 mb-6" />
            <h3 className="text-white text-2xl font-black mb-4">PASSION</h3>
            <p className="text-gray-400">
              Cultivating a love for the game that drives continuous improvement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-black text-[#d3e83d] mb-6">MEET COACH LIAM</h3>
            <p className="text-gray-500 text-lg mb-6">
              With over 3 years of padel experience and a passion for developing young athletes,
              our head coach Liam Swart brings world-class expertise to every training session.
              Certified by the Internationall recognised PadelMBA, they have trained champions
              at both national and international levels, combining technical mastery with a
              commitment to building character and sportsmanship in every player.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 44.003 43.9999">
                  <path d={svgPaths.p111a1600} fill="#D3E83D" />
                  <path d={svgPaths.p1ad335f0} fill="#D3E83D" />
                  <path d={svgPaths.p18709c80} fill="#D3E83D" />
                </svg>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 44 44">
                  <rect width="44" height="44" fill="#D3E83D" rx="8" />
                </svg>
              </div>
              <p className="text-[#d3e83d] font-bold text-lg">
                Follow Liam_Swart06 on Instagram & Facebook
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#d3e83d]">
                <img
                  src={imgRectangle1}
                  alt="Coach Liam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
