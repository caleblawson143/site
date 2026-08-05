'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="FlowRight Plumbing home">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
            <Droplets className="w-5 h-5" />
          </span>
          <span className="font-heading font-bold text-xl text-primary leading-none">
            FlowRight<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            aria-label="Call us at (555) 123-4567"
          >
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-border',
          mobileOpen ? 'max-h-96' : 'max-h-0',
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
