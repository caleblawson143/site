'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, Loader2 } from 'lucide-react'

const serviceOptions = [
  'Drain Cleaning',
  'Pipe Repair & Replacement',
  'Water Heater Services',
  'Emergency Plumbing',
  'Bathroom Remodeling',
  'Leak Detection',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [service, setService] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setFormState('success')
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-50 border border-green-200">
          <CheckCircle className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">
          Thanks, we&apos;ll be in touch soon!
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Your message has been received. A member of our team will contact you within one business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => setFormState('idle')}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="first-name">First name <span aria-hidden="true" className="text-destructive">*</span></Label>
          <Input
            id="first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="last-name">Last name <span aria-hidden="true" className="text-destructive">*</span></Label>
          <Input
            id="last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email address <span aria-hidden="true" className="text-destructive">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="jane@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="service">Service needed</Label>
        <Select onValueChange={setService} value={service} name="service">
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message <span aria-hidden="true" className="text-destructive">*</span></Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Please describe your plumbing issue or request..."
        />
      </div>

      {formState === 'error' && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={formState === 'submitting'}
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full"
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We typically respond within one business day. For emergencies, please call{' '}
        <a href="tel:+15551234567" className="text-primary font-medium hover:underline">
          (555) 123-4567
        </a>
        .
      </p>
    </form>
  )
}
