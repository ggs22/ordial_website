import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, locale } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: locale === 'fr' ? 'Veuillez remplir tous les champs obligatoires' : 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: locale === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Prepare email content
    const subject = locale === 'fr' 
      ? `Nouveau message de contact de ${name}` 
      : `New Contact Message from ${name}`;

    const emailContent = locale === 'fr' ? `
      <h2>Nouveau message de contact depuis le site web Ordial</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Ce message a été envoyé depuis le formulaire de contact du site web Ordial.</small></p>
    ` : `
      <h2>New Contact Message from Ordial Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This message was sent from the Ordial website contact form.</small></p>
    `;

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Ordial Website <noreply@ordialtechnologies.com>',
      to: [process.env.TO_EMAIL || 'ggs@ordialtechnologies.com'],
      subject: subject,
      html: emailContent,
      replyTo: email, // Allow replying directly to the sender
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: locale === 'fr' ? 'Erreur lors de l\'envoi de l\'email' : 'Error sending email' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json({
      message: locale === 'fr' 
        ? 'Message envoyé avec succès! Nous vous contacterons bientôt.' 
        : 'Message sent successfully! We\'ll get back to you soon.',
      id: data?.id
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}