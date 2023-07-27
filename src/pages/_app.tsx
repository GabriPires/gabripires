import '@/styles/globals.css'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Gabriel Pires | Frontend Developer"
        description="Bem vindo ao meu portfólio! Fique a vontade para explorar todos os meus projetos e entrar em contato comigo!"
        canonical="https://gabripires.dev"
        openGraph={{
          url: 'https://gabripires.dev',
          title: 'Gabriel Pires | Frontend Developer',
          description: 'Portfólio do Gabriel Pires',
        }}
      />

      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
