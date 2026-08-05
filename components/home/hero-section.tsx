import Link from 'next/link'
import { Phone, ShieldCheck, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Emergency Service' },
  { icon: Star, label: '500+ 5-Star Reviews' },
]

export default function HeroSection() {
  return (
    <section
      className="relative bg-brand-navy overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Available 24/7 for Emergencies
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-5"
          >
            Fast, Reliable Plumbing{' '}
            <span className="text-accent">You Can Count On</span>
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-8 text-pretty">
            FlowRight Plumbing has served homeowners and businesses across the metro area
            since 2003. From a dripping faucet to a full pipe replacement — we fix it right,
            the first time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base shadow-lg"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-base"
            >
              <a href="tel:+15551234567" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call (555) 123-4567
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-12 bg-background" aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 48V24C240 0 480 0 720 24C960 48 1200 48 1440 24V48H0Z" fill="var(--background)" />
        </svg>
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full rotate-180"
          preserveAspectRatio="none"
        >
          <path d="M0 48V24C240 0 480 0 720 24C960 48 1200 48 1440 24V48H0Z" fill="var(--brand-navy)" />
        </svg>
      </div>
    </section>
  )
}
