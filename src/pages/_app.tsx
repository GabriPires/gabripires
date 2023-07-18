import '@/styles/globals.css'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Gabriel Pires | Frontend Developer"
        description="Este é meu portfólio! Fique a vontade para explorar todos os meus projetos e entrar em contato comigo."
        // canonical="https://gabrielpires.dev.br"
        openGraph={{
          // url: 'https://gabrielpires.dev.br',
          title: 'Gabriel Pires | Frontend Developer',
          description: 'Portfólio do Gabriel Pires',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
