export function trustedEmail(email) {
    const trustedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com'];
    const domain = email.split('@')[1].toLowerCase()
    return trustedDomains.includes(domain)
}