import { ComponentProps } from 'react'
import { Copy, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'
import { CopyPasteButton } from './CopyPasteButton'

interface NavbarProps extends ComponentProps<'nav'> {}

export function Navbar(props: NavbarProps) {
  return (
    <nav
      className="flex justify-between px-4 py-6 font-bold border-b border-zinc-100"
      {...props}
    >
      <Link href="/" className="flex items-center gap-4 text-2xl">
        <span>
          GabriPires<span className="text-lg text-primary">.dev</span>
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {isMobile ? (
          <CopyPasteButton className="text-sm">
            <Mail size={24} />
          </CopyPasteButton>
        ) : (
          <CopyPasteButton className="text-sm">
            gabpiresdev@gmail.com
            <Copy size={24} />
          </CopyPasteButton>
        )}

        <a
          href="http://github.com/GabriPires"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/gabrielsantos1999/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </nav>
  )
}
