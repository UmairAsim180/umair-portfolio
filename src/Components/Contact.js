"use client"
import React from 'react'
import { TailwindBtn } from "@/Components/TailwindBtn";
import { useState } from 'react';
import { trustedEmail } from '@/utils/trustedEmail';
import { toast } from 'sonner';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (trustedEmail(form.email)) {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });
                const data = await res.json();
                if (res.ok) {
                    setForm({ name: '', email: '', message: '' });
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
            }
            else {
                toast.warning('Please enter a valid email from Gmail, Yahoo, or Outlook.')
            }
        } catch (error) {
            console.error("Contact form error:", error);
            toast.error('Failed to send message. Please try again later.');
        }

        setLoading(false);
    }

    return (
        <section id='contact' className="md:w-[60%] min-h-[80vh] m-auto font-montserrat mt-10 flex flex-col justify-start items-center relative">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold">Get in Touch</h2>
            <span className="mt-3 md:text-2xl text-xl text-center font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                Let us Work Together
            </span>
            <form
                className="my-8 flex flex-col gap-2 justify-start w-4/5"
                onSubmit={handleSubmit}
            >
                <label className="font-bold" htmlFor="name">Name</label>
                <input onChange={handleChange} value={form.name} type="text" id="name" className="border border-zinc-500 rounded-md p-3 bg-transparent" required placeholder="Your Name" />
                <label className="font-bold" htmlFor="email">Email</label>
                <input onChange={handleChange} value={form.email} type="email" id="email" className="border border-zinc-500 rounded-md p-3 bg-transparent" required placeholder="Your Email" />
                <label className="font-bold" htmlFor="message" >Message</label>
                <textarea onChange={handleChange} value={form.message} id="message" className="border border-zinc-500 rounded-md p-3 bg-transparent" required placeholder="Your Message" rows="5"></textarea>
                <TailwindBtn   text={loading ? "Sending..." : "Send Message"} cssClass={`w-full`} type="submit" isLoading={loading} isDisabled={loading} />
            </form>
        </section>
    )
}

export default Contact
