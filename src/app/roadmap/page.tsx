import { GitPullRequestCreateIcon } from 'lucide-react'
import Link from 'next/link'
import { getRoadmap } from '@/actions/get-roadmap'
import { Content } from '@/components/content'
import { SideImage } from '@/components/side-image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Roadmap',
  description:
    'Our roadmap evolves with our vision. We’re transparent, always improving, and open to your feedback.',
}

export default async function Page() {
  const { title, description } = metadata
  const features = (await getRoadmap()) ?? []

  return (
    <div className="grid w-full lg:grid-cols-2">
      <Content title={title} backToHome noFooter>
        <p className="text-lg text-muted-foreground">{description}</p>

        {(!!features.length && (
          <Accordion
            type="single"
            collapsible
            className="w-full font-mono"
            defaultValue={features[0]?.id.toString()}
          >
            {features.map((feature) => (
              <AccordionItem key={feature.id} value={feature.id.toString()}>
                <AccordionTrigger>
                  <div
                    className={cn('size-2 bg-muted rounded-full', {
                      'bg-primary': feature.status === 'done',
                      'border-[1px] border-primary border-dotted':
                        feature.status === 'in-progress',
                    })}
                  />
                  <span className="flex-1 lowercase">{feature.title}</span>
                  <span
                    className={cn(
                      'text-muted-foreground text-xs max-sm:sr-only',
                      { 'text-primary': feature.status === 'done' },
                    )}
                  >
                    {feature.status}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-muted-foreground">{feature.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )) || (
          <span className="text-xs font-mono text-muted-foreground underline decoration-dotted underline-offset-4">
            No features planned yet.
          </span>
        )}
      </Content>

      <SideImage path="/top.png" align="bottom">
        <div className="font-mono bg-background backdrop-blur-md px-3 py-1 rounded-full text-xs text-muted-foreground lg:opacity-60 lg:group-hover:opacity-100 lg:translate-y-0 lg:group-hover:-translate-y-4 lg:duration-500 lg:ease-out">
          <Link
            href={{
              pathname: 'https://github.com/niceyup/niceyup/issues/new',
              query: { title: 'feature request: ', labels: 'enhancement' },
            }}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:decoration-dotted hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitPullRequestCreateIcon className="size-4" />
            Come contribute on GitHub →
          </Link>
        </div>
      </SideImage>
    </div>
  )
}
