import { NextResponse } from 'next/server';

// This ensures the route is always handled dynamically and not statically generated
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, message, phone, subject, details } = body;
    
    // For now, let's log what we would send
    console.log('Received form submission:');
    console.log('Type:', type);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject || 'Form submission');
    console.log('Message:', message || details || '');
    
    // To properly send the email to tactiqe@gmail.com, we would integrate with a service like:
    // - Resend (https://resend.com)
    // - SendGrid (https://sendgrid.com)
    // - AWS SES
    // - Nodemailer with SMTP service
    
    // For now, just simulate a successful submission
    return NextResponse.json({ 
      success: true,
      message: 'Form submission received. For now, please also send an email directly to tactiqe@gmail.com while we set up our email service.'
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error processing your request. Please email tactiqe@gmail.com directly.'
    }, { status: 500 });
  }
}