export default function Help() {
  const locations = [
    {
      title: "Coleta de instrumentos hospitalares",
      address:
        "Loja: Rua das pedrinhas, 15 - Periperi (Loja Estilosa Modas, ao lado da borracharia de Maly e Bebinha)",
      mapSrc:
        "https://www.google.com/maps?q=Rua%20das%20pedrinhas%2C%2015%20-%20Periperi%2C%20Brasil&output=embed",
    },
    {
      title: "Coleta de cestas básicas",
      address:
        "Av. Tarquínio Pontes, 2311 - Pitangueiras, Lauro de Freitas - BA, 42701-450",
      mapSrc:
        "https://www.google.com/maps?q=Av.%20Tarqu%C3%ADnio%20Pontes%2C%202311%20-%20Pitangueiras%2C%20Lauro%20de%20Freitas%20-%20BA%2C%2042701-450&output=embed",
    },
  ];

  return (
    <>
        <section id="ajudar" className="px-6 py-16 bg-[#7EC29D] text-center">
            <h3 className="text-4xl font-serif mb-4 pb-11">
                Faça parte e ajude quem precisa.
            </h3>
            <p>
                Cadeira de rodas, muletas, andador, gazes, entre outros, podem fazer a diferença
                na vida de quem enfrenta desafios de saúde. Sua doação traz conforto, mobilidade e dignidade a essas pessoas.
            </p>
            <section>
                <img src="./itens_hospitalares.png" alt="itens hospitalares" />
                <div className="flex justify-center">
                    <img className="w-md m-auto" src="./cadeira_roda.png" alt="cadeira de rodas"/>
                    {/* <img className="w-xs m-auto" src="./cajado.png" alt="cajado" /> */}
                </div>
                {/* <img src="./" alt="" /> */}
            </section>
            <p className="max-w-xl mx-auto mb-6 text-[#6B6B6B]">
                Toda ajuda importa. Seja através de doações, voluntariado ou parcerias.
            </p>
            <div className="inline-block bg-white p-6 rounded-2xl shadow">
                <p className="font-semibold mb-2">
                    Sua empresa pode fazer parte dessa mudança
                </p>
                <a className="text-sm" href="mailto:apoiohospitalar@yahoo.com.br">
                    apoiohospitalar@yahoo.com.br
                </a>
            </div>
            <section className="mt-12">
                <h4 className="text-2xl font-serif mb-6">Pontos de coleta e doações de cestas básicas</h4>
                <div className="grid gap-8 md:grid-cols-2">
                    {locations.map((location) => (
                        <div key={location.title} className="bg-white rounded-2xl shadow p-4 text-left">
                            <h5 className="text-lg font-semibold mb-2">{location.title}</h5>
                            <p className="text-sm text-[#6B6B6B] mb-4">{location.address}</p>
                            <div className="aspect-video w-full overflow-hidden rounded-xl">
                                <iframe
                                    title={location.title}
                                    src={location.mapSrc}
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    </>
  )
}
