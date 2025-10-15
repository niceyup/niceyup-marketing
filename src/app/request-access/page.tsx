import { Content } from '@/components/content'
import { JoinWaitlistForm } from '@/components/join-waitlist-form'
import { SideImage } from '@/components/side-image'

export const metadata = {
  title: 'Request Access',
  description:
    'Get early access to a minimalist, powerful AI chat built for seamless communication.',
}

export default function Page() {
  const { title, description } = metadata

  return (
    <div className="grid w-full lg:grid-cols-2">
      <Content title={title} backToHome>
        <p className="text-lg text-muted-foreground">{description}</p>

        <JoinWaitlistForm />
      </Content>

      <SideImage path="/mountain.png" align="top">
        <div className="font-mono group-hover:opacity-100 opacity-60 translate-y-0 group-hover:-translate-y-4 duration-500 ease-out backdrop-blur-md px-3 py-1 rounded-full text-xs text-muted-foreground">
          <span className="select-none pointer-events-none">
            Made in Santa Catarina
          </span>
        </div>
      </SideImage>
    </div>
  )
}
