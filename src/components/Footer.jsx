export default function Footer() {
  return (
    <footer className="bg-[#E6F3FB] flex flex-col justify-center items-center w-full">
      <div className="max-w-[1200px] w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/images/eGov-Foundation.png" alt="eGov" loading="lazy" className="max-w-[120px] mb-4" />
            <p className="text-[#283B7B] text-sm leading-relaxed">
              Catalysing digital transformation in public service delivery at speed &amp; scale.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                { icon: 'fab fa-facebook-f', href: '#' },
                { icon: 'fab fa-twitter', href: '#' },
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-youtube', href: '#' },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#283B7B] text-[#283B7B] hover:bg-[#283B7B] hover:text-white transition-all duration-300"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="text-[#283B7B] text-xl font-extrabold mb-6">Useful Links</h6>
            <ul className="space-y-3">
              {['Home', 'Our Impact', 'DIGIT Sandbox'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#283B7B] hover:opacity-70 transition-opacity text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h6 className="text-[#283B7B] text-xl font-extrabold mb-6 invisible">More</h6>
            <ul className="space-y-3">
              {['Our People', 'Financials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#283B7B] hover:opacity-70 transition-opacity text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h6 className="text-[#283B7B] text-xl font-extrabold mb-6">Subscribe Now</h6>
            <p className="text-[#283B7B] text-sm mb-4 leading-relaxed">
              Receive regular updates of our monthly newsletter DOT – in your inbox.
            </p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full border border-white rounded-full pl-5 pr-14 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB5C3] bg-white"
              />
              <button
                type="submit"
                className="absolute right-[5px] top-[5px] bottom-[5px] bg-[#f7931e] text-white rounded-full px-5 flex items-center justify-center hover:bg-[#e07d10] transition-colors"
              >
                <i className="fas fa-caret-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#2173c0] text-white w-full py-5 text-sm">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <span>&copy; 2024. eGov. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:underline">Privacy Policy</a>
            <a href="#" className="text-white hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
