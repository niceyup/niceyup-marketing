import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  children?: React.ReactNode
  path: string
  alt?: string
  align?: 'top' | 'bottom'
}

export function SideImage({ children, path, alt = 'Generic', align }: Props) {
  return (
    <div className="top-0 sticky group bg-background h-64 lg:h-screen overflow-hidden">
      <Image
        className={cn(
          'opacity-60 size-full object-cover pointer-events-none select-none object-center',
          {
            'lg:object-top': align === 'top',
            'lg:object-bottom': align === 'bottom',
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
