import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { BLOG_DATA_URL } from '@/lib/blog/source'
import { Clock, User, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plumbing Tips & Advice – Blog',
  description:
    'Expert plumbing tips, maintenance guides, and DIY advice from the team at FlowRight Plumbing. Stay informed and keep your home\'s plumbing in top shape.',
}

interface PostSeo {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  ogImageUrl?: string
  keywords?: string[]
}

interface Post {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  heroImageUrl?: string
  author: string
  tags: string[]
  categories: string[]
  publishAt: string
  updatedAt?: string
  readingTimeMinutes: number
  wordCount?: number
  seo: PostSeo
}

interface BlogData {
  collection?: { title?: string; navLabel?: string; basePath?: string }
  posts: Post[]
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

async function getBlogData(): Promise<BlogData> {
  try {
    const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
    if (!res.ok) return { posts: [] }
    return res.json()
  } catch {
    return { posts: [] }
  }
}

export default async function BlogPage() {
  const data = await getBlogData()

  const now = new Date()
  const published = (data.posts ?? [])
    .filter((p) => new Date(p.publishAt) <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())

  const [featured, ...rest] = published

  // Collect unique categories across all published posts
  const allCategories = Array.from(
    new Set(published.flatMap((p) => p.categories ?? []))
  ).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: data.collection?.title ?? 'FlowRight Plumbing Blog',
    url: 'https://flowrightplumbing.com/blog',
    description: 'Expert plumbing tips, maintenance guides, and DIY advice.',
    publisher: {
      '@type': 'Organization',
      name: 'FlowRight Plumbing',
      url: 'https://flowrightplumbing.com',
    },
    blogPost: published.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://flowrightplumbing.com/blog/${post.slug}`,
      datePublished: post.publishAt,
      author: { '@type': 'Person', name: post.author },
      description: post.excerpt,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-brand-navy py-16 md:py-20" aria-labelledby="blog-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80">Blog</li>
              </ol>
            </nav>
            <h1
              id="blog-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance"
            >
              {data.collection?.title ?? 'Plumbing Tips & Advice'}
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl text-pretty">
              Expert guidance from our licensed plumbers — covering maintenance, repairs, and
              everything in between.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          {published.length === 0 && (
            <p className="text-muted-foreground text-center py-20">
              No posts published yet. Check back soon.
            </p>
          )}

          {/* Featured post — fully clickable card */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-14 rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow cursor-pointer"
              aria-label={`Read ${featured.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-brand-light">
                  {featured.heroImageUrl ? (
                    <img
                      src={featured.heroImageUrl}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      width={600}
                      height={360}
                    />
                  ) : (
                    <img
                      src="/placeholder.svg?height=360&width=600"
                      alt={featured.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={360}
                    />
                  )}
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {featured.categories?.[0] && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                        {featured.categories[0]}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary text-balance group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {featured.author}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={featured.publishAt}>{formatDate(featured.publishAt)}</time>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readingTimeMinutes} min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Category pills */}
          {allCategories.length > 0 && (
            <div
              className="flex items-center gap-2 flex-wrap mb-8"
              role="navigation"
              aria-label="Blog categories"
            >
              <span className="text-xs font-semibold text-muted-foreground mr-1">Categories:</span>
              {allCategories.map((cat) => (
                <span
                  key={cat}
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Post grid — each card fully clickable */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  aria-label={`Read ${post.title}`}
                >
                  <div className="aspect-video overflow-hidden bg-brand-light">
                    {post.heroImageUrl ? (
                      <img
                        src={post.heroImageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        width={400}
                        height={200}
                      />
                    ) : (
                      <img
                        src="/placeholder.svg?height=200&width=400"
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width={400}
                        height={200}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {post.categories?.[0] && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                          {post.categories[0]}
                        </span>
                      )}
                    </div>
                    <h2 className="font-heading font-semibold text-base text-foreground text-balance group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <span>{post.author}</span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={post.publishAt}>{formatDate(post.publishAt)}</time>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTimeMinutes} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
