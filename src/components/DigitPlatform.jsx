export default function DigitPlatform() {
  return (
    <section className="bg-[#0E165D] text-white flex justify-center items-center relative p-0">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 px-4 lg:px-0">
            <div className="py-20">
              <img
                src="/images/digit-n.png"
                alt="DIGIT by eGov"
                loading="lazy"
                className="max-w-[150px] mb-6"
              />
              <h2 className="mb-6">
                <span className="block text-[35px] font-light">Our open source</span>
                <strong className="block text-[45px] font-bold">technology-for-good platform</strong>
              </h2>
              <p className="text-base font-light text-white/80 mb-8 leading-relaxed">
                DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is
                eGov's open-source platform with reusable building blocks and shared data registries that
                can be used to build solutions in multiple sectors.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-[#0E165D] font-semibold rounded-full px-6 py-2.5 hover:bg-gray-100 transition-colors"
              >
                Explore platform
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute top-[-70px] lg:w-1/2 relative flex items-center justify-center min-h-[400px] overflow-hidden">
            <img
              src="/images/DIGIT-Image-Only.png"
              alt="Platform usage"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
