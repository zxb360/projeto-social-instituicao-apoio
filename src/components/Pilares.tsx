import { HeartHandshake, Users, RefreshCw } from "lucide-react";


export default function Pilares() {
  return (
    <>
        <section className="px-6 py-16 max-w-6xl mx-auto">
            <h3 className="font-serif text-4xl mb-4 py-10">
                Como fazemos a diferença
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center py-20 bg-[#F2F2F2] rounded-2xl shadow-sm">
                    <HeartHandshake className="mx-auto mb-4 text-[#C94A4A]" size={60} />
                    <h4 className="font-semibold mb-2">Ajuda Humana</h4>
                    <p className="text-sm text-[#6B6B6B]">
                        Apoio direto com empatia, respeito e dignidade.
                    </p>
                </div>
                <div className="text-center py-20 bg-[#F2F2F2] rounded-2xl shadow-sm">
                    <Users className="mx-auto mb-4 text-[#2F7D6D]" size={60} />
                    <h4 className="font-semibold mb-2">Apoio Social</h4>
                    <p className="text-sm text-[#6B6B6B]">
                        Fortalecendo vínculos e redes comunitárias.
                    </p>
                </div>
                <div className="text-center py-20 bg-[#F2F2F2] rounded-2xl shadow-sm">
                    <RefreshCw className="mx-auto mb-4 text-[#2F7D6D]" size={60} />
                    <h4 className="font-semibold mb-2">Transformação</h4>
                    <p className="text-sm text-[#6B6B6B]">
                        Mudanças reais através de ações contínuas.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}
