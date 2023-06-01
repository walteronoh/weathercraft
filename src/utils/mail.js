const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    port: process.env.NEXT_PUBLIC_MAIL_PORT,
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

const sendMail = async (body) => {
    return new Promise((resolve, reject) => {
        const { text } = body;
        const mailData = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.NEXT_PUBLIC_EMAIL_TO,
            subject: 'Get In Touch',
            text: text,
        };
        transporter.sendMail(mailData, (err, info) => {
            if (err) reject(err);
            resolve(info);
        });
    });
}

module.exports = {
    sendMail
}