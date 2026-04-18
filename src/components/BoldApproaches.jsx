import { useState } from 'react'
import icuImg from '../assets/images/ICU-Equipment.G16.2k-1-3.png'
import covidImg from '../assets/images/covid-vaccine-1.png'

const tabs = [
  {
    id: 'health',
    label: 'Public Health',
    cards: [
      {
        stat: '210+',
        desc: 'cities LIVE with\n10BedICU across\nIndia',
        img: icuImg,
        bg: 'bg-[#55b6c7]',
        alt: 'Medical bed',
      },
      {
        stat: '2 Bn',
        desc: 'COVID-19\nvaccination\ncertificates issued',
        img: covidImg,
        bg: 'bg-[#3198f5]',
        alt: 'Certificate',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Public Finance',
    cards: [
      {
        stat: '500+',
        desc: 'cities using\ndigital finance\nsolutions',
        img: icuImg,
        bg: 'bg-[#55b6c7]',
        alt: 'Finance',
      },
      {
        stat: '₹2 Tn',
        desc: 'transactions\nprocessed\ndigitally',
        img: covidImg,
        bg: 'bg-[#3198f5]',
        alt: 'Transactions',
      },
    ],
  },
  {
    id: 'governance',
    label: 'Local Governance',
    cards: [
      {
        stat: '300+',
        desc: 'Urban Local\nBodies using\nDIGIT',
        img: icuImg,
        bg: 'bg-[#55b6c7]',
        alt: 'Governance',
      },
      {
        stat: '10M+',
        desc: 'Citizen\nservices\nenabled',
        img: covidImg,
        bg: 'bg-[#3198f5]',
        alt: 'Citizens',
      },
    ],
  },
  {
    id: 'water',
    label: 'Water & Sanitation',
    cards: [
      {
        stat: '150+',
        desc: 'cities with\ndigital water\nmanagement',
        img: icuImg,
        bg: 'bg-[#55b6c7]',
        alt: 'Water',
      },
      {
        stat: '5M+',
        desc: 'households\nwith clean\nwater access',
        img: covidImg,
        bg: 'bg-[#3198f5]',
        alt: 'Households',
      },
    ],
  },
]

export default function BoldApproaches() {
  const [activeTab, setActiveTab] = useState('health')
  const current = tabs.find((t) => t.id === activeTab)

  return (
    <section className="bg-transparent relative flex justify-center h-auto lg:h-[60vh]">
      <div
        className="relative lg:absolute z-10 bg-white rounded-2xl px-4 lg:px-8 py-8 lg:top-[-15%] max-w-[1200px] w-full"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <div className="lg:w-5/12 lg:pr-8">
            <h2 className="mb-8">
              <span className="block text-[2.2rem] font-light text-[#4a5568]">Big problems need</span>
              <strong className="block text-[2.5rem] font-semibold text-[#0b1a4a]">bold approaches</strong>
            </h2>
            <nav className="flex flex-col gap-3 mt-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-6 py-3 font-medium text-center transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#1978DD] text-white border-[#1978DD]'
                      : 'bg-white text-[#0b1a4a] border-[#0b1a4a] hover:bg-[#1978DD] hover:text-white hover:border-[#1978DD]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right - Cards */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-2 gap-3 px-2 lg:px-0 lg:h-[425px]">
              {current.cards.map((card, i) => (
                <div
                  key={i}
                  className={`${card.bg} rounded-2xl p-4 lg:p-10 text-white overflow-hidden relative flex flex-col h-full`}
                >
                  <div>
                    <h3 className="text-2xl lg:text-5xl font-bold mb-2">{card.stat}</h3>
                    <p className="text-xs lg:text-sm font-normal mb-4 lg:mb-8 max-w-[85%] text-[#0b1a4a] leading-snug whitespace-pre-line">
                      {card.desc}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="self-start bg-white text-[#0b1a4a] rounded-full px-3 py-1 lg:px-5 lg:py-1.5 font-medium text-xs lg:text-sm hover:bg-gray-100 transition-colors mt-2 lg:mt-3"
                  >
                    Read More
                  </a>
                  <img
                    src={card.img}
                    alt={card.alt}
                    loading="lazy"
                    className="absolute bottom-[-10px] right-[-10px] max-w-[85%] rounded-br-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
