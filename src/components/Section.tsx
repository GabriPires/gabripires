import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps extends ComponentProps<'section'> {}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={twMerge('flex flex-col gap-4 py-4 px-4 md:px-0', className)}
      {...props}
    />
  )
}
