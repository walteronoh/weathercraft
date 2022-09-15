const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    port: 465,
    host: "walterkiprono.com",
    auth: {
        // user: process.env.EMAILUSERNAME,
        // pass: process.env.EMAILPASSWORD,
        user: 'contact@walterkiprono.com',
        pass: 'P@$$w0rdFour321'
    },
    secure: false, // upgrades later with STARTTLS -- change this based on the PORT
});

const sendMail = async (body) => {
    return new Promise((resolve, reject) => {
        const { to, cc, subject, text } = body;
        const mailData = {
            from: '<contact@walterkiprono.com>',
            to: 'walterkiprono81@gmail.com',
            cc: cc ? cc : '',
            subject: 'Test',
            text: 'Hello Walter',
        };
        transporter.sendMail(mailData, (err, info) => {
            if (err) reject(err);
            resolve({ message: "Mail Sent Successfully" });
        });
    });
}

module.exports = {
    sendMail
}