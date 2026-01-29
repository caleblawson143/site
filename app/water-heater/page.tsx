import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { CheckCircle, Thermometer, Clock, Droplet, Phone, Wrench, AlertCircle } from 'lucide-react'

export default function WaterHeaterPage() {
  const maintenanceTips = [
    {
      icon: Thermometer,
      title: 'Check Temperature Settings',
      description: 'Keep your water heater set to 120°F for optimal efficiency and safety. Higher temperatures waste energy and increase scalding risk.'
    },
    {
      icon: Droplet,
      title: 'Drain and Flush Annually',
      description: 'Remove sediment buildup by draining several gallons from the tank once a year to improve efficiency and extend lifespan.'
    },
    {
      icon: Wrench,
      title: 'Test Pressure Relief Valve',
      description: 'Check the T&P valve annually to ensure it operates correctly and prevents dangerous pressure buildup.'
    },
    {
      icon: Clock,
      title: 'Schedule Professional Inspection',
      description: 'Have a licensed plumber inspect your water heater annually to catch potential issues before they become expensive problems.'
    }
  ]

  const services = [
    {
      title: 'Water Heater Installation',
      description: 'Expert installation of traditional tank and tankless water heaters',
      icon: Wrench
    },
    {
      title: 'Repair Services',
      description: 'Fast, reliable repairs for all water heater makes and models',
      icon: CheckCircle
    },
    {
      title: 'Maintenance Plans',
      description: 'Preventive maintenance to keep your water heater running efficiently',
      icon: Clock
    }
  ]

  const commonIssues = [
    'No hot water or insufficient hot water',
    'Water temperature fluctuations',
    'Strange noises (popping, rumbling)',
    'Rusty or discolored water',
    'Water leaking around the tank',
    'Pilot light keeps going out',
    'High energy bills',
    'Age over 10-12 years'
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003b5d] to-[#003b5d]/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://reliantplumbing.com/jjwp/wp-content/uploads/2018/10/Featured-WH-Images-Website.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-balance">
              Water Heater Maintenance Tips for San Antonio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Extend the life of your water heater and ensure reliable hot water with proper maintenance and professional service.
            </p>
            <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Service
            </Button>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Essential Water Heater Maintenance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to keep your water heater running efficiently for years
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

      {/* Main Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Why Water Heater Maintenance Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Regular maintenance is crucial for keeping your water heater operating safely and efficiently. In San Antonio, hard water is particularly tough on water heaters, causing mineral buildup that reduces efficiency and shortens lifespan.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {'With proper care, a traditional tank water heater can last 10-12 years, while tankless models can last 20 years or more. Our professional maintenance services help you get the most out of your investment while ensuring your family always has reliable hot water.'}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Improve energy efficiency and lower utility bills</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Extend the lifespan of your water heater</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Prevent unexpected breakdowns and cold showers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>Ensure safe operation and prevent leaks</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src="https://reliantplumbing.com/jjwp/wp-content/uploads/2018/10/Featured-WH-Images-Website.png"
                alt="Tankless Water Heater"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertCircle className="h-12 w-12 text-[#f3bc48] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                Signs Your Water Heater Needs Attention
              </h2>
              <p className="text-lg text-muted-foreground">
                {'Don\'t ignore these warning signs - they could indicate serious problems'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted border border-border">
                  <AlertCircle className="h-5 w-5 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Experiencing any of these issues? Our expert technicians can diagnose and repair your water heater quickly.
              </p>
              <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold">
                Get Fast Repair Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Complete Water Heater Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From installation to maintenance, we handle all your water heater needs
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

      {/* Tankless vs Tank Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-center">
              Choosing the Right Water Heater
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="https://reliantplumbing.com/jjwp/wp-content/uploads/2018/10/Featured-WH-Images-Website.png"
                      alt="Tankless Water Heater"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-[#003b5d]">Tankless Water Heaters</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Endless hot water on demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Energy efficient - only heats when needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Compact, space-saving design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Lasts up to 20+ years</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="https://reliantplumbing.com/jjwp/wp-content/uploads/2020/08/Why-isnt-my-water-hot.jpg"
                      alt="Traditional Tank Water Heater"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-[#003b5d]">Traditional Tank Heaters</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Lower upfront installation cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Familiar, proven technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>Easier to service and repair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#f3bc48] flex-shrink-0 mt-0.5" />
                      <span>10-12 year average lifespan</span>
                    </li>
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
            Expert Water Heater Service in San Antonio
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {'Whether you need installation, repair, or maintenance, our licensed plumbers are ready to help. Call us today!'}
          </p>
          <Button size="lg" className="bg-[#f3bc48] hover:bg-[#f3bc48]/90 text-[#003b5d] font-semibold text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Call for Water Heater Service
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
