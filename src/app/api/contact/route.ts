import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, location, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      // Send via Resend
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: 'Peri Peri Grill House Website <onboarding@resend.dev>',
        to: 'help@periperigh.com',
        replyTo: email,
        subject: `New Website Inquiry from ${name}${location ? ` (${location})` : ''}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          location ? `Preferred Location: ${location}` : null,
          '',
          'Message:',
          message,
        ]
          .filter(Boolean)
          .join('\n'),
      });
    } else {
      // Log for development when no API key is set
      console.log('Contact form submission (no Resend API key configured):', {
        name,
        email,
        phone,
        location,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
