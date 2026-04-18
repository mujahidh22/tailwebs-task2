import { useState, useEffect } from 'react'
import { MOCK_PRODUCTS, PRODUCT_CATEGORIES } from '../data/productData'

function ProductCard({ product }) {
  return (
    <div className="bg-[#ECF6FB] rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-52 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <h5 className="text-[#0b1a4a] font-bold text-[1.05rem] leading-snug mb-4 flex-1">
          {product.name}
        </h5>



        <div className="text-xs text-[#4a5568] font-medium flex items-center gap-1 mb-3">
          <span className="text-[#0b1a4a] text-lg leading-none">•</span>
          {product.author}
          <span className="text-[#0b1a4a] text-lg leading-none ml-2">•</span>
          {product.date}
        </div>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="bg-white text-[#4a5568] text-xs font-medium px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Products() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [activeCategory, setActiveCategory] = useState("What's New")

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setProducts(MOCK_PRODUCTS)
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (search === debouncedSearch) return
    setIsSearching(true)
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
      setIsSearching(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  // Filter product based on category and debounced search query
  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    const matchCategory =
      activeCategory === "What's New" || p.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <section className="py-20 flex justify-center items-start">
      <div className="max-w-[1200px] w-full px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          {/* Title */}
          <h2 className="text-[35px] font-light text-[#333] shrink-0">
            Latest at <strong className="text-[#0E165D] font-bold text-[45px]">eGov</strong>
          </h2>

          {/* Search Bar */}
          <div className="relative w-full sm:max-w-sm">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#0E165D]/50 text-sm"></i>
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="product-search"
              autoComplete="off"
              className="w-full border border-[#0E165D]/30 rounded-full pl-10 pr-5 py-2.5 text-sm text-[#0E165D] focus:outline-none focus:ring-2 focus:ring-[#4BB5C3] focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <ul className="flex flex-wrap gap-5 mb-6 list-none p-0">
          {PRODUCT_CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-md font-semibold  transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#4BB5C3] text-white border-[#4BB5C3]'
                    : 'bg-white text-[#0E165D] border-[#0E165D] hover:bg-[#4BB5C3] hover:text-white hover:border-[#4BB5C3]'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>


        {/* Loader — shown during initial fetch OR debounce delay */}
        {(loading || isSearching) && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-[#4BB5C3] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#0E165D] font-medium text-sm">
              {isSearching ? 'Searching...' : 'Loading products...'}
            </p>
          </div>
        )}

        {/* No Results */}
        {!loading && !isSearching && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-[#0E165D] font-bold text-xl mb-2">No results found</h3>
            <p className="text-gray-500 text-sm">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !isSearching && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* See All Button */}
        {!loading && !isSearching && filtered.length > 0 && (
          <div className="mt-10">
            <a
              href="#"
              className="bg-[#4BB5C3] text-white rounded-full px-6 py-2.5 font-semibold hover:bg-[#1e8790] transition-colors inline-block"
            >
              See All
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
