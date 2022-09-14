export default function handler(req: any, res: any){
  const body = JSON.parse(req.body);
  const nodemailer = require('nodemailer');
 
 
  let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'adyer1717@gmail.com',
          pass: 'zpxhahtzggtsudvl'
      }
  });
   
  let mailDetails = {
      from: 'adyer1717@gmail.com',
      to: 'adyer1717@gmail.com',
      subject: 'Portfolio Inquiry',
      text: body.message +  ',' +  body.email
  };
   
  mailTransporter.sendMail(mailDetails, function(err:any, data:any) {
      if(err) {
          console.log('Error Occurs');
      } else {
          console.log('Email sent successfully');
      }
  });
};
