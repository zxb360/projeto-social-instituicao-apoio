export default function Footer() {
  return (
    <>
        <footer id="contato" className="bg-[#7EC29D] text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <p className="text-sm mb-2">
                            Email:{" "}
                            <a
                                className="underline underline-offset-4"
                                href="mailto:apoiohospitalar@yahoo.com.br"
                            >
                                apoiohospitalar@yahoo.com.br
                            </a>
                        </p>
                        <p className="text-sm mb-2">Telefone: (71) 9 9167-9438</p>
                        <p className="text-sm">
                            WhatsApp:{" "}
                            <a
                                className="underline underline-offset-4"
                                href="https://wa.me/557191679438"
                                target="_blank"
                                rel="noreferrer"
                            >
                                (71) 9 9167-9438
                            </a>
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Endereços</h4>
                        <p className="text-sm mb-2">
                            Loja Estilosa Modas: Rua das pedrinhas, 15 - Periperi
                        </p>
                        <p className="text-sm">
                            Av. Tarqu&iacute;nio Pontes, 2311 - Pitangueiras, Lauro de Freitas - BA
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Redes sociais</h4>
                        <p className="text-sm mb-2">
                            Instagram:{" "}
                            <a
                                className="underline underline-offset-4"
                                href="https://www.instagram.com/_apoiohospitalar/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @apoiohospitalar
                            </a>
                        </p>
                        <p className="text-sm">
                            Tiktok:{" "}
                            <a
                                className="underline underline-offset-4"
                                href="https://www.tiktok.com/@apoiohospitalar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                /apoiohospitalar
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <p className="mb-2">Pequenas ações constroem grandes mudanças.</p>
                    <p className="text-sm opacity-70">© 2025 • Projeto Social</p>
                    <div className="mt-4 flex flex-col items-center gap-2 text-sm opacity-80">
                        <p>Desenvolvido por Jaeder Azevedo - Oh Ziza enterprise Jarves</p>
                        <img
                            className="h-10 w-10"
                            src="/logo_jarves_ziza.png"
                            alt="Logo Jarves Ziza"
                        />
                    </div>
                </div>
            </div>
            {/* cache-bust 2026-02-03 */}

        </footer>
    </>
  )
}
