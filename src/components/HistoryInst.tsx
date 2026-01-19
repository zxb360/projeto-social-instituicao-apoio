// import { motion } from "framer-motion";
import StoryBlock from "./StoryBlackProps";

export default function HistoryInst() {
  return (
    <>
        {/* <h2 className="ont-serif text-4xl mb-4">Nosso projeto</h2> */}
        {/* <section id="projeto" className="px-6 py-20 max-w-4xl mx-auto"> */}
        <section id="projeto" className="historia-section">
          <StoryBlock
            image="/ajudar.jpg"
            title="Ajuda humana"
            text="Cuidar vai além de medicamentos e hospitais. É estar presente quando o medo aparece, 
            quando a solidão pesa e quando a esperança parece distante.
            Oferecemos acolhimento real, escuta, presença e dignidade a 
            quem enfrenta a doença sem apoio. Porque ninguém deveria passar por esse momento sozinho."
          />
          <StoryBlock
          title="Apoio social"
            image="/apoio-social.jpg"
            text="A doença não afeta apenas o corpo. Ela interrompe o trabalho, compromete a renda e fragiliza famílias inteiras.
            oferecendo suporte social enquanto a pessoa aguarda respostas, tratamentos ou benefícios que muitas vezes demoram a chegar. Nosso papel é garantir que, nesse intervalo, não falte o básico: alimentação, orientação e amparo."
            reverse
          />
          <StoryBlock
          title="Transforma&ccedil;&atilde;o"
            image="/transformacao.jpg"
            text="O cuidado muda histórias. Ele devolve dignidade, fortalece vínculos e cria novas possibilidades.
            Fazer a diferença é estar presente quando mais importa."
          />
        </section>
    </>
  )
}
