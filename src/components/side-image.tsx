import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  children?: React.ReactNode
  path: string
  alt?: string
  align?: 'top' | 'center' | 'bottom'
}

export function SideImage({
  children,
  path,
  alt = 'Generic',
  align = 'center',
}: Props) {
  return (
    <div className="top-0 sticky group bg-background h-80 lg:h-screen overflow-hidden">
      <Image
        className={cn(
          'opacity-60 size-full object-cover pointer-events-none select-none',
          {
            'object-top': align === 'top',
            'object-center': align === 'center',
            'object-bottom': align === 'bottom',
          },
        )}
        src={path}
        alt={alt}
        fill
      />

      <div className="absolute bottom-0 m-4 flex w-full justify-center">
        {children}
      </div>
    </div>
  )
}
