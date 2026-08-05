import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="cta-heading"
          className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-4"
        >
          Need a Plumber Today?
        </h2>
        <p className="text-white/75 text-lg mb-8 text-pretty">
          Don&apos;t wait for a small problem to become a big one. Our team is ready to help — call
          now for same-day service or request a free, no-obligation quote online.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base shadow-lg"
          >
            <Link href="/contact">Request a Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 font-semibold text-base"
          >
            <a href="tel:+15551234567" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/50">
          Licensed, bonded &amp; insured. No hidden fees.
        </p>
      </div>
    </section>
  )
}
