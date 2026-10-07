'use client'
import { useState } from 'react'
import type { ContactFormData } from '@/lib/types'

const inputBase =
  'w-full bg-transparent border-b border-[rgba(13,13,13,0.14)] py-2.5 text-[#0D0D0D] font-["IBM_Plex_Sans"] font-light text-[0.95rem] outline-none focus:border-[#1A3D2B] transition-colors placeholder:text-[#0D0D0D]/25'
const labelBase =
  'block font-["IBM_Plex_Mono"] text-[0.6rem] tracking-[0.18em] uppercase text-[#5A5A5A] mb-1'

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    title: '',
    organization: '',
    email: '',
    serviceArea: '',
    message: '',
  })
  const [errors, setErrors] = useState<Set<string>>(new Set())
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [apiError, setApiError] = useState(false)

  const set =
    (k: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const validate = () => {
    const required: (keyof ContactFormData)[] = ['firstName', 'lastName', 'email', 'message']
    const missing = new Set(required.filter((k) => !form[k]?.trim()))
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
      <p
        className="font-['IBM_Plex_Mono'] text-[#1A3D2B] tracking-[0.06em]"
        style={{ fontSize: '0.72rem' }}
      >
        Message received — we&apos;ll be in touch within one business day.
      </p>
    )
  }

  const fieldClass = (k: string) =>
    `${inputBase} ${errors.has(k) ? '!border-b-red-700' : ''}`

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className={labelBase}>First Name *</label>
          <input
            className={fieldClass('firstName')}
            value={form.firstName}
            onChange={set('firstName')}
            placeholder="Jane"
          />
        </div>
        <div>
          <label className={labelBase}>Last Name *</label>
          <input
            className={fieldClass('lastName')}
            value={form.lastName}
            onChange={set('lastName')}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label className={labelBase}>Title / Role</label>
        <input
          className={inputBase}
          value={form.title}
          onChange={set('title')}
          placeholder="Director of Academic Affairs"
        />
      </div>

      <div>
        <label className={labelBase}>Organization</label>
        <input
          className={inputBase}
          value={form.organization}
          onChange={set('organization')}
          placeholder="University of ..."
        />
      </div>

      <div>
        <label className={labelBase}>Email Address *</label>
        <input
          type="email"
          className={fieldClass('email')}
          value={form.email}
          onChange={set('email')}
          placeholder="jane@institution.edu"
        />
      </div>

      <div>
        <label className={labelBase}>Area of Interest</label>
        <select className={inputBase} value={form.serviceArea} onChange={set('serviceArea')}>
          <option value="">Select one...</option>
          <option>Business Consulting</option>
          <option>Professional Consulting</option>
          <option>Research Consulting</option>
          <option>Multiple / Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label className={labelBase}>Your Needs *</label>
        <textarea
          className={`${fieldClass('message')} resize-none`}
          rows={5}
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about your goals and challenges..."
        />
      </div>

      {errors.size > 0 && (
        <p
          className="font-['IBM_Plex_Mono'] text-red-700 tracking-[0.06em]"
          style={{ fontSize: '0.72rem' }}
        >
          Please complete all required fields.
        </p>
      )}
      {apiError && (
        <p
          className="font-['IBM_Plex_Mono'] text-red-700 tracking-[0.06em]"
          style={{ fontSize: '0.72rem' }}
        >
          Something went wrong. Please email us directly at{' '}
          <a href="mailto:contact@stratactconres.com" className="text-[#1A3D2B] underline">
            contact@stratactconres.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-['IBM_Plex_Mono'] text-[0.72rem] tracking-[0.16em] uppercase bg-[#1A3D2B] hover:bg-[#2E5C3F] text-[#F0EBE1] px-9 py-4 transition-colors border-0 rounded-none disabled:opacity-60 self-start mt-2"
        style={{ cursor: 'none' }}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}
