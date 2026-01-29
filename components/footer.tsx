import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#003b5d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image
              src="https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png"
              alt="Reliant Plumbing logo"
              width={160}
              height={60}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/80">
              Affordable plumbing repairs from experts nearby. Trust Reliant Plumbing for expert solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-[#f3bc48] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/80 hover:text-[#f3bc48] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/reverse-osmosis" className="text-sm text-white/80 hover:text-[#f3bc48] transition-colors">
                  Reverse Osmosis
                </Link>
              </li>
              <li>
                <Link href="/water-softener" className="text-sm text-white/80 hover:text-[#f3bc48] transition-colors">
                  Water Softener
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sewer-maintenance" className="text-sm text-white/80 hover:text-[#f3bc48] transition-colors">
                  Sewer Maintenance
                </Link>
              </li>
              <li>
                <Link href="/water-heater" className="text-sm text-white/80 hover:text-[#f3bc48] transition-colors">
                  Water Heater Services
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/80">Leak Detection</span>
              </li>
              <li>
                <span className="text-sm text-white/80">Emergency Repairs</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-[#f3bc48]" />
                <span className="text-sm text-white/80">24/7 Emergency Service</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-[#f3bc48]" />
                <span className="text-sm text-white/80">info@reliantplumbing.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-[#f3bc48]" />
                <span className="text-sm text-white/80">Serving San Antonio & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Reliant Plumbing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
