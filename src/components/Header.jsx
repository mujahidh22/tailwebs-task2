import { useState } from 'react'

const NavBarData = [
  {
    name: 'About Us',
    url: '#',
  },
  {
    name: 'Areas of work',
    url: '#',
  },
  {
    name: 'Products & Solutions',
    url: '#',
  },
  {
    name: 'Our Platform',
    url: '#',
  },
  {
    name: 'Ecosystem',
    url: '#',
  },
  {
    name: 'Resources',
    url: '#',
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#E6F3FB] py-2 text-sm">
        <div className="max-w-[1200px] mx-auto px-4 flex justify-end gap-6">
          <a href="#" className="text-[#1978DD] font-medium hover:text-[#0d5ea8] transition-colors">Events</a>
          <a href="#" className="text-[#1978DD] font-medium hover:text-[#0d5ea8] transition-colors">Contact Us</a>
          <a href="#" className="text-[#1978DD] font-medium hover:text-[#0d5ea8] transition-colors flex items-center gap-1">
            <i className="fas fa-globe"></i> English <i className="fas fa-caret-down"></i>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#FCFCFC] py-4 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img src="/images/eGov-Foundation.png" alt="eGov Foundation" className="h-11" loading="lazy" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NavBarData.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  className="text-[#0E165D] font-semibold text-[0.95rem] px-4 py-2 hover:text-[#1577BD] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.name !== 'Our Platform' && <i className="fas fa-caret-down text-xs"></i>}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <i className="fas fa-search text-[#0E165D] text-lg cursor-pointer hover:text-[#1577BD] transition-colors"></i>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[#0E165D] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#FCFCFC] border-t border-gray-100 px-4 py-4">
            <ul className="flex flex-col gap-2">
              {NavBarData.map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="block text-[#0E165D] font-semibold py-2 hover:text-[#1577BD] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
