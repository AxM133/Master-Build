import { Picture, ZoomInIcon } from '@/shared/ui'

export function WorkCard({ image, alt, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Открыть фото: ${alt}`}
      className="group relative block aspect-[330/274] w-full overflow-hidden rounded-[24px] bg-neutral-200"
    >
      <Picture src={image} alt={alt} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110" />
      <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="translate-y-2 text-left text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
          {alt}
        </span>
      </span>
      <span className="absolute right-4 top-4 flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
        <ZoomInIcon className="h-5 w-5" />
      </span>
    </button>
  )
}
