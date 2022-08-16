import { useTranslation } from 'next-i18next';
import { FormEvent } from 'react';

import ExternalLink from '../ExternalLink/ExternalLink';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Textarea from '../Textarea/Textarea';

function Form({
  onFormSubmit = () => {},
}: {
  onFormSubmit: (formEvent: FormData) => unknown;
}) {
  const { t } = useTranslation('form');

  return (
    <form
      className="form"
      onSubmit={handleFormSubmit}
    >
      <div className="form__content">
        <Input
          id="name"
          name="name"
          label={t('name.label')}
          description={t('name.description')}
          required
        />
        <Input
          id="email"
          name="email"
          label={t('email.label')}
          description={t('email.description')}
          type="email"
          required
        />
        <Textarea
          id="message"
          name="message"
          label={t('message.label')}
          className="form__message"
          description={t('message.description')}
        />
      </div>

      <div className="form__footer">
        <PrimaryButton
          type="submit"
          className="form__button"
        >
          {t('buttonText')}
        </PrimaryButton>
        <div className="form__approval">
          {t('approvedText')}
          {' '}
          <ExternalLink className="form__link" href="/">{t('approvedLink')}</ExternalLink>
        </div>
      </div>
    </form>
  );

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formEvent = new FormData(event.target as HTMLFormElement);
    onFormSubmit(formEvent);
  }
}

export default Form;
