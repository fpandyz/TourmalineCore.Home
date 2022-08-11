import { FormEvent } from 'react';
import ExternalLink from '../ExternalLink/ExternalLink';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Textarea from '../Textarea/Textarea';

function Form({
  method,
  onClick = () => {},
}: {
  method?: string;
  onClick?: () => unknown;
}) {
  return (
    <form
      className="form"
      onSubmit={handleFormSubmit}
    >
      <div className="form__content">
        <Input
          label="Имя"
          description="Чтобы мы знали, как к вам обращаться"
          name="name"
          id="name"
        />
        <Input
          label="Почта"
          description="Чтобы мы могли связаться с вами"
          name="email"
          id="email"
        />
        <Textarea
          label="Сообщение"
          id="message"
          name="message"
          description="Тут можно задать вопрос, рассказать немного о себе, своем бизнесе или задаче, с которой мы можем вам помочь"
        />
      </div>

      <div className="form__footer">
        <PrimaryButton
          type="submit"
          className="form__button"
          onClick={() => {
            onClick();
          }}
        >
          Отправить
        </PrimaryButton>
        <div className="form__approval">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных
          и соглашаетесь с
          {' '}
          <ExternalLink className="form__link">положением о конфиденциальности данных.</ExternalLink>
        </div>
      </div>
    </form>
  );

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const formEvent = new FormData(event.target as HTMLFormElement);

    // /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    console.log('hi', method);
  }
}

export default Form;
