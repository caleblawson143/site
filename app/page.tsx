import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/home/hero-section'
import ServicesPreview from '@/components/home/services-preview'
import TrustSection from '@/components/home/trust-section'
import CtaSection from '@/components/home/cta-section'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FlowRight Plumbing | Licensed Local Plumbers – Fast & Affordable',
  description:
    'FlowRight Plumbing provides expert plumbing services including drain cleaning, pipe repair, water heater installation, and 24/7 emergency plumbing. Get a free quote today.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PlumbingService',
  name: 'FlowRight Plumbing',
  image: 'https://flowrightplumbing.com/og-image.jpg',
  url: 'https://flowrightplumbing.com',
  telephone: '+15551234567',
  email: 'hello@flowrightplumbing.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Springfield',
    addressRegion: 'ST',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.7749,
    longitude: -122.4194,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '527',
  },
  priceRange: '$$',
}

const recentPosts = [
  {
    slug: 'how-to-prevent-frozen-pipes',
    title: 'How to Prevent Frozen Pipes This Winter',
    date: 'December 10, 2024',
    excerpt:
      'Frozen pipes are one of the most common — and costly — winter plumbing problems. Here is how to protect your home before temperatures drop.',
  },
  {
    slug: 'signs-you-need-a-new-water-heater',
    title: '7 Signs Your Water Heater Needs Replacing',
    date: 'November 22, 2024',
    excerpt:
      'Is your water heater past its prime? Watch for these warning signs before it fails completely and leaves you without hot water.',
  },
  {
    slug: 'tankless-vs-tank-water-heater',
    title: 'Tankless vs. Tank Water Heater: Which Is Right for You?',
    date: 'October 15, 2024',
    excerpt:
      'We break down the pros and cons of both options to help you make the best decision for your home and budget.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <TrustSection />

        {/* Blog preview */}
        <section className="py-20 bg-background" aria-labelledby="blog-preview-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  From the Blog
                </p>
                <h2
                  id="blog-preview-heading"
                  className="font-heading text-3xl font-bold text-primary"
                >
                  Plumbing Tips &amp; Advice
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                View all posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <article key={post.slug} className="flex flex-col gap-3 group">
                  <div className="rounded-xl bg-brand-light aspect-video flex items-center justify-center overflow-hidden border border-border">
                    <img
                      src={`/placeholder.svg?height=200&width=360`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      width={360}
                      height={200}
                    />
                  </div>
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <h3 className="font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors text-balance">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-accent hover:underline mt-auto"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                View all posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
