import heroImage from '../assets/images/heroImage.png'

export default function Hero() {
  return (
    <section
      className="hero-section relative min-h-[80vh] flex items-center py-24 overflow-hidden"
      style={{ background: `url('${heroImage}') right/80% no-repeat` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 w-full">
        <div className="max-w-xl">
          <h1 className="text-[#0E165D] leading-tight mb-6">
            <span className="text-[43px] font-light block">
              20 years of digital transformation in public service delivery
            </span>
            <strong className="text-[65px] font-semibold block leading-none">
              It's possible.
            </strong>
          </h1>
          <p className="text-[#0E165D] text-base font-light mb-8 leading-relaxed">
            Catalysts. Ecosystem enablers. Problem Solvers. <br />
            At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable
            governments deliver accessible, inclusive and transparent services to every citizen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#4BB5C3] text-white rounded-full px-6 py-2.5 font-semibold hover:bg-[#1e8790] transition-colors"
            >
              Join the mission
            </a>
            <a
              href="#"
              className="border border-gray-300 bg-white text-gray-700 rounded-full px-6 py-2.5 font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              Know more <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
