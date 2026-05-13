'use client'
import { useState } from 'react'
import type { ContactFormData } from '@/lib/types'

const inputClass = 'w-full bg-transparent border-b border-[rgba(13,13,13,0.14)] py-3 text-[#0D0D0D] font-["IBM_Plex_Sans"] font-light text-sm focus:outline-none focus:border-[#1A3D2B] transition-colors placeholder:text-[#5A5A5A]'
const labelClass = 'block font-["IBM_Plex_Mono"] text-[#5A5A5A] text-xs uppercase tracking-[0.12em] mb-1'

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    firstName: '', lastName: '', title: '', organization: '',
    email: '', serviceArea: '', message: '',
  })
  const [errors, setErrors] = useState<Set<string>>(new Set())
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [apiError, setApiError] = useState(false)

  const set = (k: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const validate = () => {
    const required: (keyof ContactFormData)[] = ['firstName', 'lastName', 'email', 'message']
    const missing = new Set(required.filter(k => !form[k]?.trim()))
    setErrors(missing)
    return missing.size === 0
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setApiError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setApiError(true)
    }
  }

  if (status === 'success') {
    return (
      <p className="font-['IBM_Plex_Mono'] text-[#1A3D2B] text-sm">
        Message received — we&apos;ll be in touch within one business day.
      </p>
    )
  }

  const err = (k: string) => errors.has(k) ? 'border-b-red-700' : ''

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name *</label>
          <input className={`${inputClass} ${err('firstName')}`} value={form.firstName} onChange={set('firstName')} placeholder="Jane" />
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input className={`${inputClass} ${err('lastName')}`} value={form.lastName} onChange={set('lastName')} placeholder="Smith" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Title / Role</label>
        <input className={inputClass} value={form.title} onChange={set('title')} placeholder="Director of Academic Affairs" />
      </div>
      <div>
        <label className={labelClass}>Organization</label>
        <input className={inputClass} value={form.organization} onChange={set('organization')} placeholder="University of ..." />
      </div>
      <div>
        <label className={labelClass}>Email Address *</label>
        <input type="email" className={`${inputClass} ${err('email')}`} value={form.email} onChange={set('email')} placeholder="jane@institution.edu" />
      </div>
      <div>
        <label className={labelClass}>Area of Interest</label>
        <select className={inputClass} value={form.serviceArea} onChange={set('serviceArea')}>
          <option value="">Select one...</option>
          <option>Business Consulting</option>
          <option>Professional Consulting</option>
          <option>Research Consulting</option>
          <option>Multiple / Not Sure Yet</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Your Needs *</label>
        <textarea
          className={`${inputClass} ${err('message')} resize-none`}
          rows={5}
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about your goals and challenges..."
        />
      </div>

      {errors.size > 0 && (
        <p className="font-['IBM_Plex_Mono'] text-red-700 text-xs">Please complete all required fields.</p>
      )}
      {apiError && (
        <p className="font-['IBM_Plex_Mono'] text-[#5A5A5A] text-xs">
          Something went wrong. Please email us directly at{' '}
          <a href="mailto:contact@stratactconres.com" className="text-[#1A3D2B]">contact@stratactconres.com</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-['IBM_Plex_Mono'] uppercase tracking-[0.16em] bg-[#1A3D2B] hover:bg-[#2E5C3F] text-[#F0EBE1] px-8 py-4 text-xs w-full transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}
