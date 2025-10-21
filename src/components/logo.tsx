import Image from 'next/image'
import { cn } from '@/lib/utils'
import { TypingAnimation } from './ui/typing-animation'

export function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        'font-mono flex pointer-events-none select-none items-center gap-4 text-2xl font-bold leading-tight',
        className,
      )}
    >
      <Image
        className="dark:invert"
        aria-hidden
        src="https://assets.niceyup.com/logo-light.png"
        alt="Logo"
        width={24}
        height={24}
      />
      <TypingAnimation
        words={['Niceyup']}
        cursorStyle="underscore"
        loop
        pauseDelay={1000 * 30}
      />
    </h1>
  )
}
