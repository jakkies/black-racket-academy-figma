import svgPaths from "../../imports/svg-1o83iag117";

export function Programs({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section id="programs" className="bg-black py-20">
      <div className="max-w-[1400px] mx-auto px-8">

        <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4">
          PROGRAMS
        </h2>

        <p className="text-gray-400 text-xl text-center mb-16">
          Tailored coaching paths for every stage of your Padel journey
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border-2 border-gray-800 p-10">
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              JUNIOR<br />DEVELOPMENT
            </h3>
            <p className="text-[#d3e83d] font-bold text-lg mb-8">
              Ages 8-16 | Building foundations, raising leaders
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Fundamentals & technique</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Age-appropriate physical training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Tournament preparation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Mental resilience coaching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Progress tracking & feedback</span>
              </li>
            </ul>

            <button
              onClick={onJoinClick}
              className="w-full bg-black border-2 border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              BOOK A SESSION
            </button>
          </div>

          <div className="border-2 border-gray-800 p-10">
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              HIGH-<br />PERFORMANCE
            </h3>
            <p className="text-[#d3e83d] font-bold text-lg mb-8">
              All Ages | Elite athletes | Competitive edge
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Advanced tactical training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Video analysis & strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Peak performance conditioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Competitive squad training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">One-on-one coaching sessions</span>
              </li>
            </ul>

            <button
              onClick={onJoinClick}
              className="w-full bg-black border-2 border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              BOOK A SESSION
            </button>
          </div>

          <div className="border-2 border-gray-800 p-10">
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              ADULT<br />COACHING
            </h3>
            <p className="text-[#d3e83d] font-bold text-lg mb-8">
              All ages | All levels | Flexible scheduling
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Beginner and Intermediate lessons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Competitive match play</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Fitness & conditioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Strategic game development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#d3e83d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-400">Social & league integration</span>
              </li>
            </ul>

            <button
              onClick={onJoinClick}
              className="w-full bg-black border-2 border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              BOOK A SESSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
