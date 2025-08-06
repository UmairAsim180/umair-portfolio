export async function POST(req) {
    const body = await req.json()
    // Here you can handle the form data, e.g., save it to a database or send an email
    console.log(body)
    await new Promise(resolve => setTimeout(resolve, 3000));
    return new Response(JSON.stringify({ message: 'Message Sent Successfully' }), { status: 200 });
}