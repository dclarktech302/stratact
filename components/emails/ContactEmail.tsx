import {
  Html, Body, Container, Heading, Text, Hr, Section
} from '@react-email/components'
import type { ContactFormData } from '@/lib/types'

export default function ContactEmail(data: ContactFormData) {
  return (
    <Html>
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#F0EBE1', padding: '40px 0' }}>
        <Container style={{ backgroundColor: '#fff', padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
          <Heading style={{ color: '#1A3D2B', fontSize: '24px', marginBottom: '8px' }}>
            New Inquiry — StratAct
          </Heading>
          {data.serviceArea && (
            <Text style={{ color: '#5A5A5A', fontSize: '13px', marginTop: 0 }}>
              Area of Interest: {data.serviceArea}
            </Text>
          )}
          <Hr />
          <Section>
            <Text style={{ fontSize: '14px', margin: '8px 0' }}><strong>Name:</strong> {data.firstName} {data.lastName}</Text>
            {data.title && <Text style={{ fontSize: '14px', margin: '8px 0' }}><strong>Title:</strong> {data.title}</Text>}
            {data.organization && <Text style={{ fontSize: '14px', margin: '8px 0' }}><strong>Organization:</strong> {data.organization}</Text>}
            <Text style={{ fontSize: '14px', margin: '8px 0' }}><strong>Email:</strong> {data.email}</Text>
          </Section>
          <Hr />
          <Section>
            <Text style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>Message:</Text>
            <Text style={{ fontSize: '14px', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{data.message}</Text>
          </Section>
          <Hr />
          <Text style={{ fontSize: '11px', color: '#999' }}>
            Sent via stratactconres.com contact form
          </Text>
        </Container>
      </Body>
    </Html>
  )
}
