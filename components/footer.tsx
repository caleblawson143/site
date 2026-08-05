import Link from 'next/link'
import { Phone, Mail, MapPin, Droplets } from 'lucide-react'

const serviceLinks = [
  { href: '/services#drain-cleaning', label: 'Drain Cleaning' },
  { href: '/services#pipe-repair', label: 'Pipe Repair & Replacement' },
  { href: '/services#water-heater', label: 'Water Heater Installation' },
  { href: '/services#emergency', label: '24/7 Emergency Plumbing' },
  { href: '/services#bathroom', label: 'Bathroom Remodeling' },
  { href: '/services#leak-detection', label: 'Leak Detection' },
]

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="FlowRight Plumbing home">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
                <Droplets className="w-5 h-5" />
              </span>
              <span className="font-heading font-bold text-xl leading-none text-white">
                FlowRight<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Licensed, bonded, and insured plumbers serving the greater metro area since 2003. Your trusted local experts for every plumbing need.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                (555) 123-4567
              </a>
              <a href="mailto:hello@flowrightplumbing.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                hello@flowrightplumbing.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>123 Main Street, Springfield, ST 12345</span>
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Business Hours
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-white">7am – 7pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white">8am – 5pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white">Emergency only</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/60 leading-relaxed">
              24/7 emergency service available. After-hours rates may apply.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {currentYear} FlowRight Plumbing. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
