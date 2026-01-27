export default function Hero() {
  const handleScrollToHelp = () => {
    const target = document.getElementById("ajudar");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
        <section className="text-center px-6 py-20 bg-[#F2F2F2]">
            <h2 className="font-serif text-4xl mb-4 text-[#B22222]">Projeto Social</h2>
            <p className="text-lg mb-4">Ajudar uns aos outros faz toda a diferença no mundo</p>
            <p className="max-w-xl mx-auto mb-6 text-[#6B6B6B]">
                Pequenas atitudes geram grandes transformações. Nosso projeto nasce do cuidado com pessoas e da vontade de construir um futuro mais humano.
            </p>
            <button
              type="button"
              onClick={handleScrollToHelp}
              className="px-6 py-3 rounded-xl bg-[#d3aeaa] hover:bg-[#FF0000] transition-colors duration-200 hover:opacity-50 text-white"
            > 
            QUERO AJUDAR
            </button>
        </section>
    </>
  )
}
