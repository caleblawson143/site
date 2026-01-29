import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { ArrowRight, Calendar } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      title: 'Safe Drinking Water with a Reverse Osmosis (RO) System',
      excerpt: 'Learn how reverse osmosis systems can provide your family with clean, safe drinking water by removing contaminants and impurities.',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2020/10/RO-System.gif',
      link: '/reverse-osmosis',
      date: 'March 15, 2024',
      category: 'Water Filtration'
    },
    {
      title: '4 Signs You May Need a Water Softener',
      excerpt: 'Discover the telltale signs of hard water in your home and how a water softener can protect your plumbing and appliances.',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2024/07/Descaling-System-Installation.jpg',
      link: '/water-softener',
      date: 'February 28, 2024',
      category: 'Water Treatment'
    },
    {
      title: 'Sewer Maintenance and Repair Tips',
      excerpt: 'Essential maintenance tips to keep your sewer system functioning properly and avoid costly repairs down the line.',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2025/10/Screenshot-2025-10-15-094412.jpg',
      link: '/sewer-maintenance',
      date: 'February 10, 2024',
      category: 'Maintenance'
    },
    {
      title: 'Water Heater Maintenance Tips for San Antonio Homes',
      excerpt: 'Keep your water heater running efficiently with these expert maintenance tips tailored for San Antonio homeowners.',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2018/10/Featured-WH-Images-Website.png',
      link: '/water-heater',
      date: 'January 22, 2024',
      category: 'Water Heaters'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003b5d] to-[#003b5d]/90 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance">
              Plumbing Tips & Expert Advice
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stay informed with the latest plumbing tips, maintenance advice, and industry insights from the experts at Reliant Plumbing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#f3bc48] text-[#003b5d] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 font-serif group-hover:text-[#f3bc48] transition-colors">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={post.link}>
                    <Button variant="link" className="text-[#f3bc48] hover:text-[#f3bc48]/80 p-0 font-semibold">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Have a Plumbing Question?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {'Can\'t find the answer you\'re looking for? Our expert team is ready to help with any plumbing concern.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold">
                Contact Us Today
              </Button>
              <Button size="lg" variant="outline">
                Browse All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
