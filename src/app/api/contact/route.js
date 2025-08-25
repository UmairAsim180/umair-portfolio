import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {

    const { name, email, message } = await req.json();

    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

    const myTemplate = await fetch(`${baseUrl}/Templates/myTemplate.html`)
        .then(response => response.text())
        .then(template => template
            .replace('{{name}}', name)
            .replace('{{email}}', email)
            .replace('{{message}}', message)
        )

    const  userTemplate = await fetch(`${baseUrl}/Templates/userTemplate.html`)
        .then(response => response.text())
        .then(template => template
            .replace('{{name}}', name)
        )

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: process.env.EMAIL_FROM,
                to: process.env.MY_EMAIL,
                subject: `Message from ${name}`,
                html: myTemplate,
            })
            await resend.emails.send({
                from: process.env.EMAIL_FROM,
                to: email,
                subject: `Thanks for Contacting me`,
                html:  userTemplate,
            })


        return new Response(
            JSON.stringify({ message: 'Message Sent Successfully' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return new Response(
            JSON.stringify({ message: 'Failed to Send Message. Try Again Later...', error: error.message }),
            { status: 500 }
        );
    }
}
