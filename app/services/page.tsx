import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CtaSection from '@/components/home/cta-section'
import Link from 'next/link'
import {
  Wrench,
  Droplets,
  Flame,
  AlertTriangle,
  Bath,
  Search,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description:
    'Explore the full range of plumbing services offered by FlowRight Plumbing — drain cleaning, pipe repair, water heater installation, 24/7 emergency plumbing, bathroom remodeling, and leak detection.',
}

const services = [
  {
    id: 'drain-cleaning',
    icon: Droplets,
    title: 'Drain Cleaning',
    description:
      'Slow or blocked drains are more than an inconvenience — they can lead to backups, odors, and pipe damage. Our technicians use professional hydro-jetting and mechanical snaking to clear clogs thoroughly, not just temporarily.',
    features: [
      'Kitchen and bathroom drain clearing',
      'Hydro-jetting for stubborn blockages',
      'Main sewer line cleaning',
      'Camera inspection available',
    ],
    image: '/placeholder.svg?height=320&width=560',
  },
  {
    id: 'pipe-repair',
    icon: Wrench,
    title: 'Pipe Repair & Replacement',
    description:
      'Whether you have a minor leak or a badly corroded line, our licensed plumbers will diagnose the problem and deliver a lasting fix. We work with copper, PVC, PEX, and galvanized systems.',
    features: [
      'Burst and leaking pipe repair',
      'Full or partial pipe re-runs',
      'Copper, PVC, and PEX installation',
      'Trenchless pipe lining (where applicable)',
    ],
    image: '/placeholder.svg?height=320&width=560',
  },
  {
    id: 'water-heater',
    icon: Flame,
    title: 'Water Heater Services',
    description:
      'Cold showers and skyrocketing energy bills often signal a failing water heater. We install, repair, and maintain all types of water heaters — including energy-efficient tankless models.',
    features: [
      'Tank water heater installation & repair',
      'Tankless water heater installation',
      'Annual maintenance and flushing',
      'Emergency hot water restoration',
    ],
    image: '/placeholder.svg?height=320&width=560',
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    title: '24/7 Emergency Plumbing',
    description:
      'Plumbing emergencies don\'t wait for business hours — and neither do we. Our on-call technicians are available every hour of every day, 365 days a year for urgent situations.',
    features: [
      'Burst pipe containment and repair',
      'Sewage backup resolution',
      'Gas line emergency response',
      'Flood damage mitigation',
    ],
    image: '/placeholder.svg?height=320&width=560',
  },
  {
    id: 'bathroom',
    icon: Bath,
    title: 'Bathroom Remodeling',
    description:
      'Upgrading your bathroom? We handle every aspect of the plumbing fit-out — from rough-in work to installing your new shower, vanity, tub, and toilet.',
    features: [
      'Complete rough-in plumbing',
      'Shower, tub, and toilet installation',
      'Vanity and sink hookups',
      'Wet room waterproofing consultation',
    ],
    image: '/placeholder.svg?height=320&width=560',
  },
  {
    id: 'leak-detection',
    icon: Search,
    title: 'Leak Detection',
    description:
      'A hidden leak can cause thousands in water damage before you ever notice it. We use advanced electronic and acoustic detection equipment to pinpoint leaks inside walls, floors, and under slabs — without unnecessary demolition.',
    features: [
      'Electronic leak detection equipment',
      'Acoustic pipe listening technology',
      'Slab leak detection and repair',
      'Post-detection repair services',
    ],
    image: '/placeholder.svg?height=320&width=560',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plumbing',
  provider: {
    '@type': 'PlumbingService',
    name: 'FlowRight Plumbing',
    url: 'https://flowrightplumbing.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Springfield',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
      },
    })),
  },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-brand-navy py-16 md:py-20" aria-labelledby="services-page-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80">Services</li>
              </ol>
            </nav>
            <h1
              id="services-page-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance"
            >
              Our Plumbing Services
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl text-pretty">
              From everyday fixes to complex installations, FlowRight Plumbing delivers professional
              results with transparent pricing and a satisfaction guarantee.
            </p>
          </div>
        </section>

        {/* Quick jump nav */}
        <nav aria-label="Jump to service" className="border-b border-border bg-background sticky top-16 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-x-auto">
            <ul className="flex gap-1 py-3 min-w-max">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {s.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* Service detail sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-20">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isEven = idx % 2 === 1
            return (
              <section
                key={service.id}
                id={service.id}
                aria-labelledby={`${service.id}-heading`}
                className={`flex flex-col gap-10 lg:flex-row lg:items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2
                      id={`${service.id}-heading`}
                      className="font-heading text-2xl sm:text-3xl font-bold text-primary"
                    >
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-primary hover:bg-brand-navy-dark text-primary-foreground font-semibold">
                    <Link href="/contact">Request This Service</Link>
                  </Button>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden border border-border">
                  <img
                    src={service.image}
                    alt={`FlowRight Plumbing – ${service.title}`}
                    className="w-full h-64 lg:h-80 object-cover"
                    width={560}
                    height={320}
                  />
                </div>
              </section>
            )
          })}
        </div>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
