export function LayerDetails({ layer, index, total }) {
  return (
    <div key={layer.id} className="animate-fade-up rounded-[28px] bg-neutral-50 p-8 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">
        Слой {index + 1} из {total}
      </p>
      <h3 className="mt-3 text-2xl font-bold">{layer.name}</h3>
      <p className="mt-1 text-sm font-semibold text-neutral-500">Толщина: {layer.thickness}</p>
      <p className="mt-5 text-[15px] leading-relaxed text-neutral-700">{layer.text}</p>
    </div>
  )
}
