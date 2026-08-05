import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { BLOG_DATA_URL } from '@/lib/blog/source'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react'

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

type Props = {
  params: Promise<{ slug: string }>
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

async function getBlogData(slug: string): Promise<BlogData> {
  try {
    const res = await fetch(
      `${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}`,
      { cache: 'no-store' }
    )
    if (!res.ok) return { posts: [] }
    return res.json()
  } catch {
    return { posts: [] }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getBlogData(slug)
  const now = new Date()
  const post = (data.posts ?? []).find(
    (p) => p.slug === slug && new Date(p.publishAt) <= now
  )
  if (!post) return {}

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const canonical = post.seo?.canonicalUrl
  const ogImage = post.seo?.ogImageUrl || post.heroImageUrl
  const keywords = post.seo?.keywords

  return {
    title,
    description,
    ...(keywords?.length ? { keywords: keywords.join(', ') } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: 'article',
      title,
      description,
      publishedTime: post.publishAt,
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
      authors: [post.author],
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const data = await getBlogData(slug)

  const now = new Date()
  const post = (data.posts ?? []).find(
    (p) => p.slug === slug && new Date(p.publishAt) <= now
  )

  if (!post) notFound()

  // Related posts: other published posts, up to 3
  const related = (data.posts ?? [])
    .filter((p) => p.slug !== slug && new Date(p.publishAt) <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'FlowRight Plumbing',
      url: 'https://flowrightplumbing.com',
    },
    url: `https://flowrightplumbing.com/blog/${post.slug}`,
    mainEntityOfPage: `https://flowrightplumbing.com/blog/${post.slug}`,
    ...(post.heroImageUrl ? { image: post.heroImageUrl } : {}),
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-navy py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80 truncate max-w-[180px]">{post.title}</li>
              </ol>
            </nav>

            {/* Categories */}
            {post.categories?.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap mb-4">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20"
                  >
                    <Tag className="w-3 h-3" />
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishAt}>{formatDate(post.publishAt)}</time>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          {/* Hero image */}
          {(post.heroImageUrl || true) && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-border">
              <img
                src={post.heroImageUrl ?? `/placeholder.svg?height=400&width=800`}
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover"
                width={800}
                height={400}
              />
            </div>
          )}

          {/* Content — sanitized HTML rendered with prose styles */}
          <article
            aria-label={post.title}
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-10 pt-8 border-t border-border flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            className="border-t border-border bg-brand-light py-14"
            aria-labelledby="related-posts-heading"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2
                id="related-posts-heading"
                className="font-heading text-2xl font-bold text-primary mb-8"
              >
                More Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    aria-label={`Read ${p.title}`}
                  >
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={p.heroImageUrl ?? `/placeholder.svg?height=200&width=400`}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        width={400}
                        height={200}
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      {p.categories?.[0] && (
                        <span className="text-xs font-medium text-accent">{p.categories[0]}</span>
                      )}
                      <h3 className="font-heading font-semibold text-sm text-foreground text-balance group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                        {p.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 pt-2 border-t border-border">
                        <Clock className="w-3 h-3" />
                        {p.readingTimeMinutes} min read
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-14 bg-primary text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Professional Help?
            </h2>
            <p className="text-white/75 mb-6 text-pretty">
              Our licensed plumbers are ready to tackle any job, big or small. Contact us today for a
              free quote.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
