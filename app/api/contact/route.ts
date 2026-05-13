import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ContactEmail from '@/components/emails/ContactEmail'
import type { ContactFormData } from '@/lib/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body: ContactFormData = await req.json()

  if (!body.firstName || !body.lastName || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: 'StratAct Contact <contact@stratactconres.com>',
    to: [process.env.CONTACT_EMAIL!],
    subject: `New inquiry from ${body.firstName} ${body.lastName}`,
    react: ContactEmail(body),
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ data })
}
