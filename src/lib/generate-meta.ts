import type { Metadata } from 'next'

export const generateMeta = (): Metadata => {
  const title = 'Niceyup'
  const excerpt = 'Your AI-Powered Personal Assistant'
  const description =
    'Not just another chat tool — it’s reimagined so humans and AI work together as true teammates. Built for power users and teams, with memory, collaboration, and effortless integration.'

  return {
    title: { default: `${title} - ${excerpt}`, template: `%s | ${title}` },
    description,
    icons: [
      {
        url: 'https://assets.niceyup.com/logo-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://assets.niceyup.com/logo-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    openGraph: {
      type: 'website',
      url: getServerSideURL(),
      title,
      siteName: title,
      description,
      images: { url: 'https://assets.niceyup.com/og-image.png' },
      emails: ['hello@niceyup.team'],
    },
    creator: 'Niceyup Team',
  }
}

const getServerSideURL = () => {
  let url = process.env.NEXT_PUBLIC_SERVER_URL

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`

  if (!url) url = 'http://localhost:3000'

  return url
}
