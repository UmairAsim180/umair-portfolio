import { Resend } from 'resend';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {

    const { name, email, message } = await req.json();
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

    const htmlTemplate = await fetch(`${baseUrl}/Templates/template.html`)
        .then(response => response.text())
        .then(template => template
            .replace('{{name}}', name)
            .replace('{{email}}', email)
            .replace('{{message}}', message)
        );

    const replyTemplate = await fetch(`${baseUrl}/Templates/replyTemplate.html`)
        .then(response => response.text())
        .then(template => template
            .replace('{{name}}', name)
        );

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await Promise.all([
            resend.emails.send({
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_TO,
                subject: `Message from ${name}`,
                html: htmlTemplate,
            }),
            resend.emails.send({
                from: process.env.EMAIL_FROM,
                to: email,
                subject: `Thanks for Contacting me`,
                html: replyTemplate,
            })
        ])


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
