import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { AlertCircle, CheckCircle, Droplet, Phone, Sparkles } from 'lucide-react'

export default function WaterSoftenerPage() {
  const signs = [
    {
      icon: AlertCircle,
      title: 'White Buildup on Fixtures',
      description: 'Notice chalky white deposits on faucets, showerheads, and appliances? This is a telltale sign of hard water minerals.'
    },
    {
      icon: AlertCircle,
      title: 'Dry Skin and Hair',
      description: 'Hard water can leave your skin feeling dry and your hair looking dull after bathing.'
    },
    {
      icon: AlertCircle,
      title: 'Spotty Dishes',
      description: 'If your dishes come out of the dishwasher with spots and film, hard water is likely the culprit.'
    },
    {
      icon: AlertCircle,
      title: 'Reduced Appliance Lifespan',
      description: 'Hard water buildup can damage water heaters, washing machines, and dishwashers, leading to costly repairs.'
    }
  ]

  const benefits = [
    'Softer, healthier skin and hair',
    'Cleaner, spot-free dishes and glassware',
    'Brighter, softer laundry',
    'Extended appliance lifespan',
    'Reduced soap and detergent usage',
    'Lower energy bills',
    'Prevents pipe buildup and clogs',
    'Improved water heater efficiency'
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003b5d] to-[#003b5d]/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://reliantplumbing.com/jjwp/wp-content/uploads/2024/07/Descaling-System-Installation.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-balance">
              4 Signs You May Need a Water Softener
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Protect your home and family from the damaging effects of hard water with a professional water softening system.
            </p>
            <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get a Water Test
            </Button>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Warning Signs of Hard Water
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {'Don\'t ignore these common indicators that your home needs a water softener'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {signs.map((sign, index) => (
              <Card key={index} className="border-l-4 border-l-[#f3bc48]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f3bc48]/20 text-[#003b5d] flex-shrink-0">
                      <sign.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{sign.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {sign.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                How Water Softeners Work
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Water softeners use a process called ion exchange to remove hard minerals like calcium and magnesium from your water supply. The system replaces these minerals with sodium or potassium ions, resulting in soft water that flows throughout your entire home.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {'Our water softening systems are designed to handle the unique water conditions in the San Antonio area. We\'ll assess your water hardness and recommend the right system size for your household needs.'}
              </p>
              <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold">
                Schedule a Consultation
              </Button>
            </div>
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src="https://reliantplumbing.com/jjwp/wp-content/uploads/2024/07/Descaling-System-Installation.jpg"
                alt="Water Softener Installation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="h-12 w-12 text-[#f3bc48] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                Benefits of Soft Water
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience these improvements throughout your entire home
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hard Water Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-center">
              The Cost of Hard Water
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Droplet className="h-10 w-10 text-[#f3bc48] mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Higher Bills</h3>
                  <p className="text-sm text-muted-foreground">
                    Hard water reduces efficiency in appliances, leading to increased energy and water costs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-10 w-10 text-[#f3bc48] mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Damaged Plumbing</h3>
                  <p className="text-sm text-muted-foreground">
                    Mineral buildup can clog pipes and reduce water pressure over time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-10 w-10 text-[#f3bc48] mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Cleaning Challenges</h3>
                  <p className="text-sm text-muted-foreground">
                    {'You\'ll use more soap and detergent with less effective results.'}
                  </p>
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
            Say Goodbye to Hard Water Problems
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our water softener experts will help you choose the perfect system for your home and handle professional installation.
          </p>
          <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Request Free Water Analysis
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
