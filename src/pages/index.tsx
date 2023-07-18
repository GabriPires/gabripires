import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-center gap-4 my-auto">
      <Image
        alt="Avatar do Gabri Pires"
        width={100}
        height={100}
        src={'https://github.com/GabriPires.png'}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Gabriel Pires</h1>
        <p className="font-medium text-xl">Frontend Developer</p>

        <div className="flex gap-2 mt-2">
          <a
            href="http://github.com/GabriPires"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielsantos1999/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </main>
  )
}
