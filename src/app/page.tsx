import { MapIcon } from 'lucide-react'
import Link from 'next/link'
import { getWaitlistCount } from '@/actions/get-waitlist-count'
import { Content } from '@/components/content'
import { SideImage } from '@/components/side-image'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const waitlistCount = await getWaitlistCount()

  return (
    <div className="grid w-full lg:grid-cols-2">
      <Content title="Your AI-Powered Assistant for Work and Life" withLogo>
        <p className="text-lg text-muted-foreground">
          Not just another chat tool — it was designed so humans and AI work
          together as true teammates. Create intelligent agents with knowledge
          sources, custom tools, and real-time collaboration.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button asChild variant="default" className="max-w-sm">
            <Link href="/request-access">Request Access →</Link>
          </Button>
          <Button asChild variant="secondary" className="max-w-sm">
            <Link href="mailto:hello@niceyup.team">hello@niceyup.team</Link>
          </Button>
        </div>

        <span className="text-xs font-mono text-muted-foreground underline decoration-dotted underline-offset-4">
          {waitlistCount
            ? `Join over ${(waitlistCount + 1).toLocaleString()} users already on the waitlist!`
            : 'Join the waitlist today!'}
        </span>
      </Content>

      <SideImage url="https://assets.niceyup.com/image-1.png">
        <div className="font-mono bg-background backdrop-blur-md px-3 py-1 rounded-full text-xs text-muted-foreground lg:opacity-60 lg:group-hover:opacity-100 lg:translate-y-0 lg:group-hover:-translate-y-4 lg:duration-500 lg:ease-out">
          <Link
            href="/roadmap"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:decoration-dotted hover:text-primary"
          >
            <MapIcon className="size-4" />
            See our roadmap →
          </Link>
        </div>
      </SideImage>
    </div>
  )
}
