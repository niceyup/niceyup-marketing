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
    <div className="top-0 sticky group bg-background max-lg:aspect-[6] lg:h-screen overflow-hidden">
      {/* For large screens */}
      <Image
        className={cn(
          'max-lg:sr-only opacity-60 size-full object-cover pointer-events-none select-none object-center',
          {
            'object-top': align === 'top',
            'object-bottom': align === 'bottom',
          },
        )}
        src={path}
        alt={alt}
        fill
      />

      {/* For small screens */}
      <Image
        className={cn(
          'lg:sr-only opacity-90 size-full object-cover scale-105 pointer-events-none select-none object-bottom',
        )}
        src="/decorative-strip.png"
        alt="Decorative Strip"
        fill
      />

      <div className="absolute bottom-0 m-4 flex w-full justify-center">
        {children}
      </div>
    </div>
  )
}
