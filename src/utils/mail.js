const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    port: 465,
    host: "nasiroke.com",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

const sendMail = async (body) => {
    return new Promise((resolve, reject) => {
        const { text } = body;
        const mailData = {
            from: '<contact@nasiroke.com>',
            to: 'contact@walterkiprono.com',
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