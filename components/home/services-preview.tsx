import Link from 'next/link'
import {
  Wrench,
  Droplets,
  Flame,
  AlertTriangle,
  Bath,
  Search,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Drain Cleaning',
    description:
      'Clogged drains cleared fast. We use professional hydro-jetting and snaking to restore full flow.',
    href: '/services#drain-cleaning',
  },
  {
    icon: Wrench,
    title: 'Pipe Repair & Replacement',
    description:
      'Burst, corroded, or leaking pipes repaired using the right materials for long-lasting results.',
    href: '/services#pipe-repair',
  },
  {
    icon: Flame,
    title: 'Water Heater Services',
    description:
      'Installation, repair, and maintenance for tank and tankless water heaters from all major brands.',
    href: '/services#water-heater',
  },
  {
    icon: AlertTriangle,
    title: '24/7 Emergency Plumbing',
    description:
      'Burst pipe at midnight? We have technicians on call around the clock, every day of the year.',
    href: '/services#emergency',
  },
  {
    icon: Bath,
    title: 'Bathroom Remodeling',
    description:
      'Full plumbing fit-outs for bathroom renovations — rough-in, fixtures, and finish work.',
    href: '/services#bathroom',
  },
  {
    icon: Search,
    title: 'Leak Detection',
    description:
      'Non-invasive electronic leak detection to find hidden leaks before they cause serious damage.',
    href: '/services#leak-detection',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-primary text-balance"
          >
            Plumbing Services for Every Situation
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
            Whether it&apos;s a quick fix or a major installation, our licensed team handles it all
            with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
