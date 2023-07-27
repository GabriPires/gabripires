import { Navbar } from '@/components/Navbar'
import { Section } from '@/components/Section'
import { Braces } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="flex items-center justify-between flex-col md:flex-row gap-10 md:gap-0 py-16 md:py-32">
        <div className="flex flex-col">
          <span className="text-4xl font-semibold">Eai, eu sou o</span>
          <span className="text-5xl font-extrabold text-primary">
            Gabriel Pires
          </span>
          <span className="text-2xl font-semibold">Desenvolvedor Frontend</span>
        </div>

        <div>
          <Image
            className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            alt="Avatar do Gabriel Pires"
            src="https://github.com/GabriPires.png"
            width={300}
            height={300}
          />
        </div>
      </div>

      <Section>
        <h2 className="text-4xl font-bold">
          Sobre mim
          <span className="text-primary">.</span>
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
          <p className="leading-relaxed md:leading-loose text-lg">
            Eai, eu sou o Gabriel, tenho 23 anos e sou desenvolvedor frontend à
            3 anos. Sou do interior de São Paulo e desde muito novo sou
            apaixonado por tecnologia.
          </p>
          <p className="leading-relaxed md:leading-loose text-lg">
            Enfrentei diversos desafios pessoais e profissionais, que me levaram
            à posição que ocupo hoje. Minhas habilidades principais incluem
            React com Typescript e Next.js e seus ecossistemas.
          </p>
          <p className="leading-relaxed md:leading-loose text-lg">
            Sou apaixonado pelo que faço e busco constantemente me aperfeiçoar,
            mantendo-me atualizado com as tendências do mundo de
            desenvolvimento.
          </p>
        </div>
      </Section>

      {/* <Section>
        <h2 className="text-4xl font-bold">
          Tecnologias que eu uso e estudo
          <span className="text-primary">.</span>
        </h2>
      </Section>
      
      <Section>
        <h2 className="text-4xl font-bold">
          Principais projetos
          <span className="text-primary">.</span>
        </h2>
      </Section> */}
    </main>
  )
}
