import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Springfield',
    rating: 5,
    text: 'FlowRight showed up within an hour of my call on a Sunday evening. They fixed a burst pipe under my sink quickly and cleanly. Absolutely outstanding service.',
  },
  {
    name: 'James K.',
    location: 'Riverside',
    rating: 5,
    text: 'I had them replace my 15-year-old water heater. The team was professional, respectful of my home, and finished on time. Fair pricing and top-quality work.',
  },
  {
    name: 'Linda P.',
    location: 'Oakdale',
    rating: 5,
    text: 'Used FlowRight for a full bathroom renovation plumbing fit-out. Communication was great from start to finish. I will not use anyone else for plumbing work.',
  },
]

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '5,000+', label: 'Jobs Completed' },
  { value: '500+', label: 'Five-Star Reviews' },
  { value: '60 min', label: 'Average Response Time' },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-brand-light" aria-labelledby="trust-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1 p-6 bg-white rounded-xl border border-border"
            >
              <span className="font-heading text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Customer Reviews
          </p>
          <h2
            id="trust-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-primary text-balance"
          >
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-border"
            >
              <div className="flex gap-0.5" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="text-sm font-semibold text-foreground">
                {testimonial.name}{' '}
                <span className="font-normal text-muted-foreground">— {testimonial.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
