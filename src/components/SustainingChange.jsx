import thumb1 from '../assets/images/thumb-1.jpg'
import thumb2 from '../assets/images/thumb-2.png'

export default function SustainingChange() {
  return (
    <section className="bg-[#fdfdfd] py-20">
      <div className="max-w-[800px] mx-auto px-4">
        <h2 className="text-center font-light text-[#0E165D] mb-8">
          <span className="block text-[35px]">20 years of reimagining for citizens and</span>
          <strong className="relative inline-block text-[45px] font-bold text-[#0E165D]">
            sustaining change
            <span
              className="absolute bottom-1 left-0 w-full h-3 rounded-lg -z-10"
              style={{ backgroundColor: 'rgba(43, 184, 196, 0.2)' }}
            ></span>
          </strong>
        </h2>

        <p className="text-base font-light text-[#0E165D] mb-10 text-center leading-relaxed">
          Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the quality of
          life for every citizen. To have sustainable impact at scale, the collective energy of local networks to
          solve local problems needs to be tapped into. Our partners & networks bring this collective energy to
          life. The ecosystem already exists; our task is to facilitate and amplify their efforts. For 20 years,
          we've been turning small steps into lasting, meaningful change, so that no citizen is left behind.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img src={thumb1} alt="Profile" loading="lazy" className="w-full rounded object-cover h-full" />
          <img src={thumb2} alt="Profile" loading="lazy" className="w-full rounded object-cover h-full" />
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="border border-gray-300 bg-white text-gray-700 rounded-full px-6 py-2.5 font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            Read All
          </a>
        </div>
      </div>
    </section>
  )
}
