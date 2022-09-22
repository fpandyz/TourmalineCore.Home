import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '';
const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '';
const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || '';

emailjs.init(publicKey);

export async function sendEmail(message: {
  [key: string]: string;
}) {
  try {
    const response = await emailjs.send(serviceId, templateId, message);
    return response;
  } catch (error) {
    throw error || 'Error';
  }
}

export function getMessageFromForm(formData: FormData): { [key: string]: string } {
  return Array
    .from(formData)
    .reduce((message, [key, value]) => ({
      ...message,
      [key]: value,
    }), {});
}
