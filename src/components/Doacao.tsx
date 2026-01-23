export default function Doacao() {
  return (
    <>
        <section className="px-6 sm:px-8 lg:px-12 py-12 max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Doa&ccedil;&otilde;es</h2>
            <h3>Uma pequena ajuda pode ser o ponto de virada
                na vida de alguém. Sua contribuição mantém esse 
                projeto vivo e alcançando quem mais precisa.
            </h3>
            <div className="flex flex-col">
                <p>Um gesto simples pode mudar um dia inteiro.
                    Aponte a câmera do seu celular e contribua via 
                    PIX. Sua ajuda chega onde realmente importa.
                </p>
                <h2>
                    CHAVE PIX
                </h2>
                <img className="w-80 h-80 m-auto" src="/qrCode_pix.jpeg" alt="qrcode" />
                <p>Nome: Josiane Souza Matos</p>
                <p>Chave: 71991679438</p>
            </div>
        </section>
    </>
  )
}
