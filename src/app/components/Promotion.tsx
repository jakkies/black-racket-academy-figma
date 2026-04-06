import imgBackground from "../../assets/promotion-bg.png";

export function Promotion() {
  return (
    <section id="promotion" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imgBackground}
          alt="Tennis court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/30" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          <span className="block text-[#d3e83d]">LIMITED PROMOTION</span>
          <span className="text-white block">BUY 4 SESSIONS & GET 1 FREE!</span>
        </h2>

        <p className="text-white text-xl mb-8">
          The more you buy the more you save!
        </p>

        <button className="bg-[#d3e83d] text-black px-10 py-4 font-bold text-lg hover:bg-[#c5d639] transition-colors">
          <a href="https://wa.me/27722211485" target="_blank">WHATSAPP COACH LIAM</a>
        </button>
      </div>
    </section >
  );
}
