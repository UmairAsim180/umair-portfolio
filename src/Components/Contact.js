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
                alert('Error submitting form');
            }
        }
        else {
            // alert('Please enter a valid email from Gmail, Yahoo, or Outlook.')
            toast.warning('Please enter a valid email from Gmail, Yahoo, or Outlook.')
        }
        setLoading(false);
    }

    return (
        <section className="w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
            <h2 className="text-center text-white text-4xl font-extrabold">Get in Touch</h2>
            <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                Let us Work Together
            </span>
            <form
                className="my-8 flex flex-col gap-2 justify-start w-4/5 text-white"
                onSubmit={handleSubmit}
            >
                <label className="font-bold" htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" id="name" className="border border-zinc-500 rounded-md p-3 bg-transparent" required placeholder="Your Name" />
                <label className="font-bold" htmlFor="email">Email</label>
                <input onChange={handleChange} type="email" id="email" className="border border-zinc-500 rounded-md p-3 bg-transparent" required placeholder="Your Email" />
                <label className="font-bold" htmlFor="message" >Message</label>
                <textarea onChange={handleChange} id="message" className="border border-zinc-500 rounded-md p-3 bg-transparent" required placeholder="Your Message" rows="5"></textarea>
                <TailwindBtn text={'Send Message'} cssClass={`w-full`} type="submit" disabled={loading} />
            </form>
        </section>
    )
}

export default Contact
