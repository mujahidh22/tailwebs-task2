import home2sec from '../assets/images/home-2sec.jpeg'

export default function Stats() {
  return (
    <section
      className="stats-section relative min-h-screen flex justify-center py-15"
      style={{
        background: `linear-gradient(rgba(40,40,40,0.5), rgba(40,40,40,0.5)), url('${home2sec}') center center/cover no-repeat`
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col justify-between items-center gap-64 px-4">
        {/* Top stat */}
        <div className="w-full flex flex-col md:flex-row items-center gap-6 mb-3 text-white">
          <div className="md:w-2/3">
            <h2 className="text-5xl md:text-7xl font-light mb-0">1,000,000,100+</h2>
          </div>
          <div className="md:w-1/3  md:pl-6">
            <p className="opacity-75 text-lg leading-relaxed">
              Citizens availing public services through eGov's Digital Public Goods (DPG)
            </p>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="w-full flex flex-col md:flex-row gap-8 text-white mb-16">
          <div className="flex-1">
            <div className="text-4xl font-normal">1.1 Billion+</div>
            <div className="text-base font-light opacity-90 mt-1">Public services delivered</div>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-normal">50+ partners</div>
            <div className="text-base font-light opacity-90 mt-1">From technology, governments and NGOs</div>
          </div>
          <div className="flex-1 invisible">
            <div className="text-4xl font-normal">100+ projects</div>
            <div className="text-base font-light opacity-90 mt-1">Completed successfully globally</div>
          </div>
        </div>
      </div>
    </section>
  )
}
