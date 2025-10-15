import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        'flex pointer-events-none select-none items-center gap-4 text-2xl font-bold leading-tight',
        className,
      )}
    >
      <Image
        className="dark:invert"
        aria-hidden
        src="/light-logo.png"
        alt="Logo"
        width={24}
        height={24}
      />
      Niceyup_
    </h1>
  )
}
