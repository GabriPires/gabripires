import { useCopyToClipboard } from '@/hooks/use-clipboard'
import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'

interface CopyPasteButtonProps extends ComponentProps<'button'> {}

export function CopyPasteButton({ className, ...props }: CopyPasteButtonProps) {
  const [_, copy] = useCopyToClipboard()

  return (
    <button
      className={twJoin('flex gap-2 items-center', className)}
      {...props}
      onClick={() => copy('gabpiresdev@gmail.com')}
    >
      {props.children}
    </button>
  )
}
