export const sendMailService = (body) => {
    return fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_URL, {method: "post", headers: { "Content-Type": "Application/Json"}, body: JSON.stringify(body)});
}