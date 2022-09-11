export default (req: any, res: any) => {
  const body = JSON.parse(req.body);
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'adyer1717@gmail.com', // Change to your recipient
    from: 'adyer1717@gmail.com', // Change to your verified sender
    subject: 'Portfolio Inquiry',
    text: body.message + "," + body.email
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error:any) => {
      console.error(error)
    })
  res.status(200).json({ status: "okay" });
};