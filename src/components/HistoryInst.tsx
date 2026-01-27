// import { motion } from "framer-motion";

import { useState } from "react";

const storyText = `
O Apoio Hospitalar nasceu muito antes de ter um nome. Ele nasceu dentro da minha história, da minha realidade, das dores e necessidades da minha própria família.

Desde a minha adolescência, quando minha mãe ficou doente e eu, junto com minhas irmãs, precisei trabalhar para manter a casa, aprendi na prática o peso da responsabilidade e da ausência de apoio. Ali, mesmo sem saber, eu já vivia aquilo que mais tarde se tornaria o Apoio Hospitalar.

Depois da minha mãe, vieram outras jornadas. Minha prima ficou doente e, mais uma vez, enfrentamos a falta de alimentação e de suporte. Mesmo em meio às dificuldades, eu, minhas irmãs e minha mãe permanecemos ao lado dela, cuidando até o fim.

Mais tarde, minha sobrinha recém-nascida enfrentou a tuberculose. Precisei fingir minha idade para poder ficar internada com ela no hospital, pois ela não podia ficar sozinha. Foram meses entre hospitais, consultas e lutas, acompanhando sua trajetória até os 8 anos de idade.

Em seguida, veio um dos capítulos mais marcantes da minha vida: a doença de outra prima.
Naquele momento, eu já não era mais adolescente. Eu havia concluído o curso de corretagem imobiliária, estava estagiando como corretora e finalmente começava a construir minha própria vida. Ganhava bem, realizava sonhos e alcançava certa estabilidade financeira.

Mas, mais uma vez, a vida colocou a família à prova. Minha prima passou a precisar de internações constantes, e todos na família trabalhavam e não tinham condições de permanecer diariamente ao lado dela no hospital. A mãe dela, minha tia, havia acabado de conquistar um emprego com carteira assinada. Faltar seria arriscado, pois aquele trabalho era a única fonte segura de renda da casa naquele momento. Ainda assim, mesmo trabalhando, ela esteve presente durante todo o processo da filha.

Foi então que fiz uma escolha — uma escolha que carrego com orgulho até hoje. Renunciei ao meu trabalho para ficar integralmente com minha prima, dia e noite, acompanhando exames, alimentação, medicações, crises, medos e esperanças. Decidi estar presente para que minha tia não perdesse o emprego e para que minha prima jamais estivesse sozinha em um processo tão doloroso. Aquela foi uma das experiências mais intensas, humanas e transformadoras da minha vida.

Em seguida, foi a vez do meu sobrinho. Mais uma vez, estive presente, oferecendo cuidado, apoio e estrutura diante da doença.

No meio dessa caminhada, veio também a doença do meu tio, que enfrentava sérios problemas respiratórios. Ele morava em uma casa muito fria e úmida, o que agravava ainda mais seu quadro de saúde. Com muito esforço, dedicação e o dinheiro que eu havia juntado com sacrifício, consegui reformar toda a casa para que ele pudesse viver com mais conforto e dignidade.

Além disso, eu marcava exames, consultas, levava aos atendimentos e fazia tudo o que estivesse ao meu alcance para cuidar dele. Esse cuidado não foi apenas meu: meus tios, tias e primos também se uniram. Com esse conjunto de apoio, meu tio conseguiu ter mais qualidade de vida e viver bem por muito mais tempo. Esse resultado foi uma das maiores provas de que cuidar transforma — e, muitas vezes, salva.

Com o passar do tempo, minha missão começou a ultrapassar os limites da minha própria família. Conheci uma menina muito jovem que enfrentava a doença da mãe: um câncer devastador, somado a profundas dificuldades financeiras e emocionais. Mesmo sem ter muito, eu não consegui virar as costas. Ofereci todo o apoio possível, de forma prática, emocional e humana. E, embora a dor tenha sido inevitável, sei que pude proporcionar dignidade, amor e acolhimento em um dos momentos mais difíceis da vida delas.

Mas a raiz desse propósito começou antes de todas essas histórias.

Cresci vendo minha mãe ajudar pessoas — mesmo sem ter. Mesmo com a despensa vazia, contas atrasadas e dificuldades que só nós, dentro de casa, conhecíamos, ela sempre encontrava uma forma de abençoar alguém. Minha mãe tem um coração voltado ao amor ao próximo. Ela ajuda, divide e acolhe. Foi esse exemplo que moldou quem eu sou.

A vontade de ajudar nasceu dentro da minha própria casa. Cresceu quando cuidei dos meus. E hoje se estende para além da minha família, alcançando pessoas que enfrentam doenças, abandono, fome, dores emocionais e negativas do INSS.

O Apoio Hospitalar nasceu da dor, mas se transformou em propósito.
Nasceu da necessidade, mas se tornou missão.

Começou dentro da minha família e hoje alcança pessoas doentes, sem condições financeiras e sem apoio — especialmente aquelas que aguardam respostas do INSS, não recebem benefícios e, ao mesmo tempo, não podem trabalhar.

É nesse momento que o Apoio Hospitalar entra.

Existimos para dar suporte enquanto a pessoa luta pela vida, para que ninguém enfrente, ao mesmo tempo, a doença, a fome e o abandono.

Essa é a minha história.
Essa é a essência do projeto.
E é por isso que o Apoio Hospitalar existe: porque nenhuma dor deve ser enfrentada sozinha.
`;

export default function HistoryInst() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <section className="px-6 py-16 bg-[#F7F4F0]">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif text-center mb-4">
            Como nasce o Apoio Hospitalar...
          </h3>
          <h4 className="text-lg md:text-xl uppercase tracking-wide text-center text-[#6B6B6B] mb-8">
            A origem do Projeto Apoio Hospitalar
          </h4>
          <p
            className="text-base leading-7 text-[#2D2D2D] whitespace-pre-line"
            style={
              isExpanded
                ? undefined
                : {
                    display: "-webkit-box",
                    WebkitLineClamp: 10,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }
            }
          >
            {storyText}
          </p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-[#7A2F1D] underline underline-offset-4"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "Ler menos" : "Ler texto completo"}
          </button>

          <div className="mt-8">
            <p className="text-base text-[#2D2D2D]">
              Com amor, propósito e humanidade,
            </p>
            <p className="mt-2 text-xl font-semibold text-[#1A1A1A]">
              Josiane Souza Matos
            </p>
            <p className="text-sm uppercase tracking-wide text-[#6B6B6B]">
              Fundadora do Projeto Apoio Hospitalar
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
