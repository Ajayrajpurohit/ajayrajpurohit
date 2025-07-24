import { ArticleLayout } from '@/components/ArticleLayout'

export const dynamic = 'force-static'

export const article = {
  author: 'Adam Wathan',
  date: '2022-09-02',
  title: 'Introducing Animaginary: High performance web animations',
  description:
    'When you are building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  slug: 'introducing-animaginary',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        When you are building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </ArticleLayout>
  )
}