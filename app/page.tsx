import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { CheckCircle, Clock, Shield, Wrench, Phone, Droplet } from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      icon: Droplet,
      title: 'Reverse Osmosis Systems',
      description: 'Safe, clean drinking water with our advanced RO filtration systems.',
      link: '/reverse-osmosis',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2020/10/RO-System.gif'
    },
    {
      icon: Wrench,
      title: 'Water Softener Installation',
      description: 'Protect your pipes and appliances from hard water damage.',
      link: '/water-softener',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2024/07/Descaling-System-Installation.jpg'
    },
    {
      icon: Shield,
      title: 'Sewer Maintenance & Repair',
      description: 'Professional sewer line services to keep your system running smoothly.',
      link: '/sewer-maintenance',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2025/10/Screenshot-2025-10-15-094412.jpg'
    },
    {
      icon: Clock,
      title: 'Water Heater Services',
      description: 'Expert installation, repair, and maintenance for all water heater types.',
      link: '/water-heater',
      image: 'https://reliantplumbing.com/jjwp/wp-content/uploads/2018/10/Featured-WH-Images-Website.png'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Available round the clock for your plumbing emergencies'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified professionals you can trust'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with solid warranties'
    },
    {
      icon: Phone,
      title: 'Fast Response',
      description: 'Quick arrival times to minimize your downtime'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003b5d] to-[#003b5d]/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://reliantplumbing.com/jjwp/wp-content/uploads/2025/12/Jacob-Pointing-at-Leak-Expert-Leak-Detection-Reliant-Plumbing.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-balance">
              Expert Plumbing Solutions 24/7
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Affordable plumbing repairs from experts nearby. From repairs to installations, trust Reliant Plumbing for expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Service
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f3bc48]/20 text-[#003b5d] mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Plumbing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#f3bc48]/20 text-[#003b5d] flex-shrink-0">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Link href={service.link}>
                        <Button variant="link" className="text-[#f3bc48] hover:text-[#f3bc48]/80 p-0">
                          Learn More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src="https://reliantplumbing.com/jjwp/wp-content/uploads/2025/09/Max8.jpg"
                alt="Reliant Plumbing expert technician"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Trusted Plumbing Experts in San Antonio
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {'With years of experience serving the San Antonio area, Reliant Plumbing has built a reputation for reliable, professional service. Our team of licensed plumbers is dedicated to solving your plumbing problems quickly and efficiently.'}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Satisfaction guaranteed on all work</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003b5d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Need Plumbing Help Right Away?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {'Our team is standing by 24/7 to handle your plumbing emergencies. Don\'t wait - call us now!'}
          </p>
          <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Call for Immediate Service
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
