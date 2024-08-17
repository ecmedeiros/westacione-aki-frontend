export function NotFound() {
  return (
    <section className="w-full h-full p-7 flex flex-col items-center justify-center gap-8">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-xl font-bold text-brand-secondary">
          Ops! Página não encontrada
        </h1>
        <p className="text-gray-subtitles">
          Parece que a página que você tentou acessar não existe.
        </p>
      </div>
    </section>
  )
}
