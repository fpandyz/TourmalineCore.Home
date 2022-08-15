import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY || '';
const emailTo = process.env.SENDGRID_EMAIL_TO || '';
const emailFrom = process.env.SENDGRID_EMAIL_FROM || '';

export default async function (req: any, res: any) {
  sgMail.setApiKey(apiKey);

  const {
    name,
    email,
    message,
    subject,
  } = req.body;

  const testMessage = `
    <strong>Name:</strong> ${name}\r\n
    <strong>Email:</strong> ${email}\r\n
    <strong>Message:</strong> ${message}
  `;

  const content = {
    to: emailTo,
    from: emailFrom,
    subject: `${subject} - ${email}`,
    text: message,
    html: testMessage.replace(/\r\n/g, '<br />'),
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error: any) {
    res.status(400).send('Message not sent.');
  }
}
