import { LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { GithubIcon, XIcon } from './icons'
import { ModeToggle } from './mode-toggle'

const links = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/niceyup',
  },
  {
    icon: XIcon,
    label: 'X (formerly Twitter)',
    href: 'https://x.com/niceyup_',
  },
  {
    icon: GithubIcon,
    label: 'open source',
    href: 'https://github.com/niceyup',
  },
]

export const Footer = () => {
  return (
    <footer className="flex font-mono relative gap-x-8 gap-y-4 text-xs flex-wrap items-center justify-center">
      <ModeToggle />
      {links.map((link) => (
        <Link
          key={link.href}
          className="flex items-center gap-2"
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <link.icon width="1.5em" height="1.5em" />
          <span className="underline underline-offset-4 decoration-dotted text-muted-foreground hover:text-primary">
            {link.label}
          </span>
        </Link>
      ))}
    </footer>
  )
}
