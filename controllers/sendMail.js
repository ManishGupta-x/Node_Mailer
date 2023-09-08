const nodemailer = require("nodemailer"); 

const sendMail = async (req, res) => {

    const testAccount = await nodemailer.createTestAccount();
    let transporter = await nodemailer.createTransport({

        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
        user: 'thomas60@ethereal.email',
        pass: 'euWtZAdHwqsq2DJwh8'
        }
    });
    const info = await transporter.sendMail({
        from: '"Hello Ji 👻" <jarvis@2002.com>', // sender address
        to: "arsenidegaming22@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello Peeps", // plain text body
        
      });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports = sendMail;