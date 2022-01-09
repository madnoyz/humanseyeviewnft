export default function contact(req, res) {
  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: `madnoyz@gmail.com`,
    to: `madnoyz@gmail.com`,
    subject: `humansEYEview Whitelist Request from ${req.body.name}`,
    html: `<div>You have a whitelist request from ${req.body.name}. Add their email: ${req.body.email}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  console.log(req.body);
}
