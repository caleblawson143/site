import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with FlowRight Plumbing. Request a free quote, schedule a service, or reach our 24/7 emergency line. We serve the greater Springfield area.',
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@flowrightplumbing.com',
    href: 'mailto:hello@flowrightplumbing.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Main Street, Springfield, ST 12345',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri 7am–7pm · Sat 8am–5pm · 24/7 Emergency',
    href: null,
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact FlowRight Plumbing',
  url: 'https://flowrightplumbing.com/contact',
  mainEntity: {
    '@type': 'PlumbingService',
    name: 'FlowRight Plumbing',
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
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-brand-navy py-16 md:py-20" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80">Contact</li>
              </ol>
            </nav>
            <h1
              id="contact-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance"
            >
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl text-pretty">
              Ready to get started? Fill out the form and we&apos;ll get back to you within one
              business day with a free, no-obligation quote.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact info sidebar */}
              <aside className="lg:col-span-2 flex flex-col gap-8">
                <div>
                  <h2 className="font-heading text-xl font-bold text-primary mb-4">
                    Contact Information
                  </h2>
                  <ul className="flex flex-col gap-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <li key={label} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              target={href.startsWith('http') ? '_blank' : undefined}
                              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm text-foreground">{value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-accent/10 border border-accent/20">
                  <p className="text-sm font-bold text-foreground mb-1">
                    Plumbing emergency?
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Don&apos;t wait — call our emergency line now. Technicians are on call 24 hours a day.
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    (555) 123-4567
                  </a>
                </div>

                <div className="rounded-xl overflow-hidden border border-border aspect-video">
                  {/* Static map placeholder */}
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Map showing FlowRight Plumbing location at 123 Main Street, Springfield"
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div>
              </aside>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-bold text-primary mb-6">
                    Request a Free Quote
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
