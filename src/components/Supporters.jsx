const supporters = [
  { src: 'https://placehold.co/150x80/ffffff/000000?text=Partner+1', alt: 'Partner 1' },
  { src: 'https://placehold.co/150x80/ffffff/000000?text=Partner+2', alt: 'Partner 2' },
  { src: 'https://placehold.co/150x80/ffffff/000000?text=Partner+3', alt: 'Partner 3' },
  { src: 'https://placehold.co/150x80/ffffff/000000?text=Partner+4', alt: 'Partner 4' },
]

export default function Supporters() {
  return (
    <section className="py-16 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        <h3 className="mb-10">
          <span className="text-[35px] font-light text-[#0B1A4A]">Our </span>
          <strong className="text-[45px] font-bold text-[#0B1A4A]">Supporters</strong>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {supporters.map((s) => (
            <img
              key={s.alt}
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="max-w-[120px] h-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
