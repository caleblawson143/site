import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { CheckCircle, AlertTriangle, Wrench, Phone, Calendar, Shield } from 'lucide-react'

export default function SewerMaintenancePage() {
  const maintenanceTips = [
    {
      icon: Calendar,
      title: 'Schedule Regular Inspections',
      description: 'Have your sewer lines professionally inspected annually to catch problems early before they become major issues.'
    },
    {
      icon: Shield,
      title: 'Watch What Goes Down',
      description: 'Avoid flushing items that can cause clogs, including wipes, feminine products, and excessive toilet paper.'
    },
    {
      icon: Wrench,
      title: 'Professional Cleaning',
      description: 'Schedule periodic hydro-jetting or professional cleaning to remove buildup and maintain optimal flow.'
    },
    {
      icon: AlertTriangle,
      title: 'Address Issues Promptly',
      description: 'Never ignore warning signs like slow drains, gurgling sounds, or sewage odors - call a professional immediately.'
    }
  ]

  const warningSign = [
    'Multiple clogged drains throughout the home',
    'Gurgling sounds from toilets or drains',
    'Sewage backup in toilets or drains',
    'Foul sewage odors around your property',
    'Slow draining sinks, tubs, or showers',
    'Wet spots or standing water in your yard',
    'Unusually lush patches of grass',
    'Foundation cracks or settling'
  ]

  const services = [
    {
      title: 'Sewer Line Inspection',
      description: 'Video camera inspection to identify blockages, cracks, or tree root intrusion',
      icon: Shield
    },
    {
      title: 'Hydro-Jetting',
      description: 'High-pressure water cleaning to remove stubborn clogs and buildup',
      icon: Wrench
    },
    {
      title: 'Sewer Line Repair',
      description: 'Professional repair services using traditional or trenchless methods',
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003b5d] to-[#003b5d]/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://reliantplumbing.com/jjwp/wp-content/uploads/2025/10/Screenshot-2025-10-15-094412.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-balance">
              Sewer Maintenance and Repair Tips
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Keep your sewer system running smoothly with expert maintenance and avoid costly emergency repairs.
            </p>
            <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Essential Sewer Maintenance Tips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these expert recommendations to keep your sewer system healthy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {maintenanceTips.map((tip, index) => (
              <Card key={index} className="border-t-4 border-t-[#f3bc48]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f3bc48]/20 text-[#003b5d] flex-shrink-0">
                      <tip.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-12 w-12 text-[#f3bc48] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                Warning Signs of Sewer Problems
              </h2>
              <p className="text-lg text-muted-foreground">
                {'Don\'t wait until it\'s too late - recognize these red flags'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {warningSign.map((sign, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                  <AlertTriangle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                {'If you notice any of these signs, it\'s important to act quickly to prevent further damage.'}
              </p>
              <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold">
                Get Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src="https://reliantplumbing.com/jjwp/wp-content/uploads/2024/04/pipe-leak.jpg"
                alt="Pipe leak repair"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Why Regular Maintenance Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Your sewer system works hard every day to remove wastewater from your home. Without proper maintenance, small issues can quickly escalate into major problems that are expensive and disruptive to repair.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Regular sewer maintenance helps prevent clogs, identifies potential issues before they become emergencies, and extends the life of your sewer lines. Our professional inspection and cleaning services ensure your system operates efficiently year-round.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Prevent costly emergency repairs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Extend the lifespan of your sewer system</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Protect your property from sewage damage</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Maintain healthy drainage throughout your home</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Our Sewer Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive sewer maintenance and repair solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f3bc48]/20 text-[#003b5d] mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003b5d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Protect Your Home with Professional Sewer Maintenance
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {'Don\'t wait for a sewer emergency. Schedule your inspection today and keep your system running smoothly.'}
          </p>
          <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Book Your Sewer Inspection
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
