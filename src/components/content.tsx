import Link from 'next/link'
import { Footer } from './footer'
import { Logo } from './logo'

export function Content({
  children,
  title,
  backToHome = false,
  withLogo = false,
  noFooter = false,
}: {
  children: React.ReactNode
  title: string
  backToHome?: boolean
  withLogo?: boolean
  noFooter?: boolean
}) {
  return (
    <main className="px-8 sm:px-16 py-8 flex flex-col items-center gap-16">
      <div className="flex flex-1 flex-col justify-center max-w-xl lg:max-w-lg items-start gap-8">
        {withLogo && (
          <div className="flex items-center gap-2 w-full justify-between">
            <Logo />

            <Link
              className="underline underline-offset-4 decoration-dotted font-mono text-xs text-muted-foreground hover:text-primary"
              href="/company"
            >
              company
            </Link>
          </div>
        )}
        {backToHome && (
          <Link
            className="underline underline-offset-4 decoration-dotted font-mono text-xs text-muted-foreground hover:text-primary"
            href="/"
          >
            ← back to home
          </Link>
        )}
        <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
        {children}
      </div>
      {!noFooter && <Footer />}
    </main>
  )
}
