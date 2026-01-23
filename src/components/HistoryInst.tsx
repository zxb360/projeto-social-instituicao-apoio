// import { motion } from "framer-motion";

import { useState } from "react";

const storyText = `
O Apoio Hospitalar nasceu muito antes de ter um nome. Ele nasceu dentro da minha história, dentro da minha realidade, dentro das dores e necessidades da minha própria família.

Desde a minha adolescência, quando a minha mãe ficou doente e eu, junto com minhas irmãs, tive que trabalhar para manter a casa, eu aprendi na prática o peso da responsabilidade e da ausência de apoio. Ali, mesmo sem saber, eu já vivia aquilo que mais tarde se tornaria o Apoio Hospitalar.

Depois da minha mãe, vieram outras jornadas: minha prima ficou doente, e novamente enfrentamos a falta de alimentação e de suporte. Mesmo em meio às dificuldades, eu, minhas irmãs e minha mãe permanecemos cuidando dela até o fim.

Mais tarde, minha sobrinha recém-nascida enfrentou tuberculose. Eu precisei fingir minha idade para ficar internada com ela no hospital, porque ela não podia ficar sozinha. Foram meses dentro de hospitais, consultas e lutas até os seus 8 anos de idade.

E então veio um dos capítulos mais marcantes da minha trajetória: a doença de outra prima.
Naquele momento, eu já não era mais adolescente — eu já era uma jovem adulta que havia concluído o curso de corretagem imobiliária e estava estagiando como corretora de imóveis. Eu estava finalmente começando a construir minha vida, ganhando bem, realizando sonhos e alcançando estabilidade financeira.
Mas a vida, mais uma vez, colocou a família à prova. A minha prima precisou de internamento constante, e todos da família trabalhavam e não tinham condições de permanecer diariamente ao lado dela no hospital. A mãe dela, minha tia, havia acabado de conquistar seu emprego com carteira assinada, e seria arriscado faltar — aquele trabalho era a única fonte segura de renda da casa naquele momento. Mas mesmo com o trabalho, ela esteve presente o tempo todo no processo da filha dela 
Foi então que eu fiz uma escolha — uma escolha que até hoje carrego com orgulho no coração. Eu renunciei ao meu trabalho para ficar com a minha prima integralmente, dia e noite, acompanhando exames, alimentação, medicamentos, crises, medos e esperanças. Eu decidi estar presente para que a minha tia não perdesse o emprego e para que a minha prima nunca estivesse sozinha naquele processo tão doloroso. Aquela foi uma das experiências mais intensas, humanas e transformadoras da minha vida.

Em seguida, foi a vez do meu sobrinho. E novamente eu estive presente, oferecendo cuidado, apoio e estrutura diante da doença.

No meio dessa caminhada, veio também meu tio, que enfrentava problemas de saúde respiratórios. Ele morava em uma casa muito fria e úmida, e eu sabia que aquilo estava piorando o quadro dele. Com muito esforço e dedicação, e com o dinheiro que eu tinha juntado com muito sacrifício, consegui reformar a casa inteira do meu tio para que ele pudesse viver com mais conforto e dignidade. Além disso, fui eu quem marcava exames, consultas, levava ao atendimento e fazia o que estivesse ao meu alcance para cuidar dele. E esse cuidado não foi só meu — meus tios, tias e primos também se uniram e ajudaram. E com todo esse conjunto de apoio, meu tio conseguiu ter qualidade de vida e viver bem por muito mais tempo. Esse resultado foi uma das maiores provas de que cuidar transforma — e salva.

Com o passar do tempo, minha missão começou a ultrapassar os limites da minha própria família. Conheci uma menina muito jovem que enfrentava a doença da mãe — um câncer devastador, acompanhado de dificuldades financeiras e emocionais. E, mesmo sem ter muito, eu não consegui virar as costas. Entrei com todo o apoio possível, ajudando de forma prática, emocional e humana. E, mesmo que a dor tenha sido inevitável, sei que pude proporcionar dignidade, amor e acolhimento em um dos momentos mais difíceis da vida delas.

Mas a raiz desse propósito começou antes de todas essas histórias.

Eu cresci vendo minha mãe ajudar pessoas — mesmo sem ter.
Mesmo com a dispensa vazia, mesmo com contas atrasadas, mesmo com dificuldades que só nós dentro de casa sabíamos, ela sempre encontrava uma forma de abençoar alguém. A minha mãe tem um coração voltado para o amor ao próximo. Ela ajuda, divide, acolhe. E eu cresci vendo isso. Foi esse exemplo que moldou meu coração.
A vontade de ajudar nasceu primeiro dentro da minha própria casa. Cresceu quando eu ajudei os meus. E hoje se estende para além da minha família, alcançando pessoas que também enfrentam doenças, abandono, fome, dores emocionais e negativas do INSS.
O Apoio Hospitalar nasceu da dor, mas se transformou em propósito.
Nasceu da necessidade, mas se tornou missão.
Começou dentro da minha família e hoje alcança pessoas que estão doentes, sem condições financeiras e sem apoio — especialmente quando estão aguardando resposta do INSS e não recebem benefício, mas também não podem trabalhar.

É nesse momento que o Apoio Hospitalar entra.
Nós existimos para dar suporte enquanto a pessoa luta pela vida, para que ninguém passe pelo sofrimento de estar doente e, ao mesmo tempo, passar fome ou viver em abandono.

Essa é a minha história.
Essa é a essência do projeto.
E é por isso que hoje o Apoio Hospitalar existe — porque nenhuma dor deve ser enfrentada sozinha.
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
