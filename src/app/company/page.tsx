import { Content } from '@/components/content'
import { Logo } from '@/components/logo'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'About Us',
  description:
    'Learn more about our company, our mission, values, and the team dedicated to creating a minimalist, powerful AI chat experience.',
}

export default function Page() {
  const { title, description } = metadata

  return (
    <div>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]',
        )}
      />

      <Content title={`ツ ${title}`} backToHome>
        <p className="text-lg text-muted-foreground">{description}</p>

        <h3 className="text-sm font-mono text-muted-foreground underline decoration-dotted underline-offset-4">
          Meet the Team
        </h3>
        <p>
          We are a small, dedicated team of AI enthusiasts, designers, and
          developers passionate about creating a better chat experience. Each
          member brings unique skills and perspectives, united by a shared
          vision of innovation and excellence.
        </p>

        <h3 className="text-sm font-mono text-muted-foreground underline decoration-dotted underline-offset-4">
          Our Mission
        </h3>
        <p>
          our mission is to simplify the way you interact with AI. We believe
          that technology should enhance your life without adding complexity.
          Our goal is to provide a seamless, intuitive chat experience that
          empowers you to get things done faster and smarter.
        </p>

        <h3 className="text-sm font-mono text-muted-foreground underline decoration-dotted underline-offset-4">
          Our Values
        </h3>
        <ul className="flex flex-col gap-4">
          <li>
            <strong>Simplicity:</strong> We prioritize clean design and
            straightforward functionality to ensure our users can navigate and
            utilize our platform with ease.
          </li>
          <li>
            <strong>Innovation:</strong> We are committed to staying at the
            forefront of AI technology, continuously improving our services to
            meet the evolving needs of our users.
          </li>
          <li>
            <strong>User-Centricity:</strong> Our users are at the heart of
            everything we do. We actively seek and incorporate user feedback to
            ensure our platform meets their needs and expectations.
          </li>
        </ul>

        <h3 className="text-sm font-mono text-muted-foreground underline decoration-dotted underline-offset-4">
          brand & design
        </h3>
        <p>
          Our brand is a reflection of our commitment to simplicity and
          functionality. The name{' '}
          <span className="normal-case font-mono font-semibold">Niceyup</span>{' '}
          embodies our friendly, approachable ethos, while our minimalist design
          aesthetic ensures that users can focus on what matters most: their
          interactions with AI.
        </p>

        <Logo className="mx-auto mt-8" />
      </Content>
    </div>
  )
}
