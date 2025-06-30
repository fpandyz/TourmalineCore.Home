import { useState } from 'react';
import { FormRedesign } from '../FormRedesign/FormRedesign';
import { getMessageFromForm, sendEmail } from '../../../common/utils/sendEmail';


export function FormBlockRedesign() {
  const [email, setEmail] = useState(``);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <section className="form-block-redesign">
      <div className="form-block-redesign__inner"
      >
        {
          !isSubmit
            ? (
              <FormRedesign
                onSubmit={onFormSubmit}
              />
            )
            : (
              <div>Спасибо!</div>
            )
        }
      </div>
    </section>
  );

  async function onFormSubmit(formData: FormData) {
    const messageSend = getMessageFromForm(formData);

    await sendEmail(messageSend);
    setEmail(messageSend.email);
    setIsSubmit(true);
  }
}
