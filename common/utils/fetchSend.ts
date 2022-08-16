const URL = '/api/send';

export type SendEmail = {
  name: string,
  email: string,
  message: string,
  subject: string,
};

export async function sendEmail(message: SendEmail) {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}
