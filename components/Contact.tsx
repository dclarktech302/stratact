'use client'
import { useState } from 'react'
import { Reveal } from './Reveal'
import type { ContactFormData } from '@/lib/types'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '.16em',
  marginBottom: '6px',
  color: 'var(--paper)',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--paper)',
  outline: 'none',
  fontSize: '18px',
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontWeight: 300,
  color: 'var(--paper)',
  padding: '8px 0',
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data: ContactFormData = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      titleRole: (form.elements.namedItem('titleRole') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      areaOfInterest: (form.elements.namedItem('areaOfInterest') as HTMLSelectElement).value,
      needs: (form.elements.namedItem('needs') as HTMLTextAreaElement).value,
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <section id="s05" style={{
      marginTop: 'clamp(72px,11vw,176px)',
      marginLeft: 'calc(-1 * var(--pad-x))',
      marginRight: 'calc(-1 * var(--pad-x))',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      paddingTop: 'clamp(56px,8vw,112px)',
      paddingBottom: 'clamp(56px,8vw,112px)',
      background: 'var(--ink)',
      color: 'var(--paper)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(32px,6vw,96px)',
      }}>
        {/* Left */}
        <div>
          <Reveal type="up">
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontSize: 'clamp(48px,8vw,120px)',
              lineHeight: .94,
              margin: '0 0 24px',
              color: 'var(--paper)',
            }}>
              Start a <em style={{ fontStyle: 'italic' }}>conversation.</em>
            </h2>
          </Reveal>
          <Reveal type="up" delay={1}>
            <p style={{ fontSize: '20px', lineHeight: 1.55, margin: '0 0 32px', color: 'var(--paper)' }}>
              Tell us about your organization&apos;s goals and challenges. We respond within one business day.
            </p>
          </Reveal>
          <Reveal type="up" delay={2}>
            <a
              href="mailto:contact@stratactconres.com"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(24px,3vw,40px)',
                color: 'var(--paper)',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '4px',
              }}
            >
              contact@stratactconres.com
            </a>
          </Reveal>
        </div>

        {/* Right — form */}
        <div>
          {status === 'success' ? (
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: 'var(--paper)' }}>
              Form submission successful!
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '28px 32px',
            }}>
              <div>
                <label style={labelStyle}>First name *</label>
                <input name="firstName" required style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Last name *</label>
                <input name="lastName" required style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Title / role</label>
                <input name="titleRole" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Organization</label>
                <input name="organization" style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Email *</label>
                <input name="email" type="email" required style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Area of interest</label>
                <select name="areaOfInterest" style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="">Select one…</option>
                  <option>Business Consulting</option>
                  <option>Professional Consulting</option>
                  <option>Research Consulting</option>
                  <option>Multiple / Not Sure Yet</option>
                </select>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Your needs *</label>
                <textarea name="needs" required rows={4} style={{ ...inputStyle, resize: 'none' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '.1em',
                    padding: '16px 32px',
                    border: 'none',
                    borderRadius: 0,
                    cursor: 'pointer',
                  }}
                  className="contact-submit"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message →'}
                </button>
              </div>
              {status === 'error' && (
                <p style={{ gridColumn: '1 / -1', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#ff6b6b' }}>
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <p style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        color: 'var(--paper)',
        marginTop: 'clamp(40px,6vw,80px)',
        marginBottom: 0,
      }}>
        §05 — Contact
      </p>

      <style>{`
        .contact-submit:hover {
          background: var(--moss);
          color: var(--paper);
        }
        input::placeholder, textarea::placeholder {
          color: rgba(240,235,225,0.35);
        }
        input:focus, textarea:focus, select:focus {
          border-bottom-width: 3px;
        }
      `}</style>
    </section>
  )
}
