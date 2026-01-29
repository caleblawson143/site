import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { CheckCircle, Droplet, Shield, Heart, Phone } from 'lucide-react'

export default function ReverseOsmosisPage() {
  const benefits = [
    {
      icon: Droplet,
      title: 'Pure, Clean Water',
      description: 'Removes up to 99% of contaminants including lead, chlorine, and bacteria'
    },
    {
      icon: Heart,
      title: 'Better Health',
      description: 'Reduces exposure to harmful chemicals and improves overall water quality'
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'Safeguards your family from waterborne pollutants and impurities'
    },
    {
      icon: CheckCircle,
      title: 'Great Taste',
      description: 'Eliminates unpleasant tastes and odors for refreshing drinking water'
    }
  ]

  const features = [
    'Multi-stage filtration process',
    'Removes dissolved solids and minerals',
    'Improves taste and odor',
    'Reduces TDS (Total Dissolved Solids)',
    'Low maintenance requirements',
    'Cost-effective long-term solution',
    'Eco-friendly alternative to bottled water',
    'Professional installation included'
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003b5d] to-[#003b5d]/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://reliantplumbing.com/jjwp/wp-content/uploads/2020/10/RO-System.gif"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-balance">
              Safe Drinking Water with Reverse Osmosis Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Protect your family with clean, pure water. Our advanced RO systems remove harmful contaminants for the safest drinking water possible.
            </p>
            <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Installation
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Why Choose Reverse Osmosis?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of having an RO system in your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f3bc48]/20 text-[#003b5d] mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src="https://reliantplumbing.com/jjwp/wp-content/uploads/2020/10/RO-System.gif"
                alt="Reverse Osmosis System"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                How Reverse Osmosis Works
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Reverse osmosis is a water purification process that uses a semi-permeable membrane to remove ions, molecules, and larger particles from drinking water. The system forces water through the membrane under pressure, leaving contaminants behind.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {'Our RO systems are designed to provide your family with the cleanest, safest drinking water possible. From installation to ongoing maintenance, Reliant Plumbing ensures your system operates at peak performance.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Quality Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-center">
              What Does RO Remove?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#003b5d]">Heavy Metals</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Lead</li>
                    <li>• Mercury</li>
                    <li>• Arsenic</li>
                    <li>• Chromium</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#003b5d]">Chemicals</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Chlorine</li>
                    <li>• Fluoride</li>
                    <li>• Pesticides</li>
                    <li>• Herbicides</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#003b5d]">Contaminants</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bacteria</li>
                    <li>• Viruses</li>
                    <li>• Dissolved solids</li>
                    <li>• Sediment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003b5d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready for Cleaner, Safer Water?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our experts install a reverse osmosis system in your home today. Experience the difference pure water makes.
          </p>
          <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
