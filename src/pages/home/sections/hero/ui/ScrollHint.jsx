export function ScrollHint({ href }) {
  return (
    <a
      href={href}
      aria-label="Листайте вниз"
      className="absolute bottom-6 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-white/50 pt-2 transition hover:border-white md:flex"
    >
      <span className="h-2 w-1 rounded-full bg-white motion-safe:animate-scroll-hint" />
    </a>
  )
}
