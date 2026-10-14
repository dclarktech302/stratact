import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { ContactFormData } from '@/lib/types'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body: ContactFormData = await req.json()

  if (!body.firstName || !body.lastName || !body.email || !body.needs) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: 'contact@stratactconres.com',
    to: process.env.CONTACT_EMAIL!,
    subject: `New inquiry from ${body.firstName} ${body.lastName}`,
    html: `
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      ${body.titleRole ? `<p><strong>Title:</strong> ${body.titleRole}</p>` : ''}
      ${body.organization ? `<p><strong>Organization:</strong> ${body.organization}</p>` : ''}
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.areaOfInterest ? `<p><strong>Area of interest:</strong> ${body.areaOfInterest}</p>` : ''}
      <p><strong>Needs:</strong> ${body.needs}</p>
    `,
  })

  if (error) return NextResponse.json({ error }, { status: 400 })
  return NextResponse.json({ data })
}
