import { useTranslation } from 'next-i18next';
import { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InputRedesign } from './components/InputRedesign/InputRedesign';
import { TextareaRedesign } from './components/TextareaRedesign/TextareaRedesign';

export function FormRedesign() {
  const {
    t,
  } = useTranslation(`formRedesign`);

  return (
    <section
      className="form-redesign container-redesign"
      data-testid="form"
    >
      <div className="form-redesign__wrapper">
        <form
          className="form-redesign__inner"
          onSubmit={handleFormSubmit}
        >
          <h2 className="form-redesign__title">{t(`title`)}</h2>
          <p className="form-redesign__description">{t(`description`)}</p>
          <InputRedesign
            id="name"
            name="name"
            className="form-redesign__input"
            label={t(`nameInputPlaceholder`)}
            onKeyDown={(e) => {
              if (e.key === `Enter`) {
                e.preventDefault();
              }
            }}
            required
          />
          <InputRedesign
            id="email"
            name="email"
            className="form-redesign__input"
            label={t(`emailInputPlaceholder`)}
            type="email"
            onKeyDown={(e) => {
              if (e.key === `Enter`) {
                e.preventDefault();
              }
            }}
            required
          />
          <TextareaRedesign
            id="message"
            name="message"
            label={t(`textareaPlaceholder`)}
            className="form-redesign__input"
            description={t(`message.description`)}
          />
          <div className="form-redesign__attach">
            <span>{t(`or`)}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.54265 1.0814C7.85074 0.765446 8.21849 0.513816 8.62458 0.341101C9.03067 0.168386 9.46702 0.0780257 9.9083 0.0752607C10.3496 0.0724958 10.787 0.157381 11.1953 0.324994C11.6035 0.492606 11.9744 0.739609 12.2864 1.05167C12.5984 1.36374 12.8453 1.73465 13.0129 2.1429C13.1805 2.55115 13.2653 2.9886 13.2625 3.42989C13.2596 3.87117 13.1692 4.3075 12.9964 4.71357C12.8237 5.11964 12.572 5.48736 12.256 5.7954L7.07132 10.9807C6.88618 11.169 6.66561 11.3187 6.42232 11.4212C6.17904 11.5238 5.91786 11.5771 5.65385 11.5782C5.38984 11.5793 5.12822 11.5282 4.88408 11.4276C4.63995 11.3271 4.41813 11.1793 4.23142 10.9926C4.04471 10.806 3.89681 10.5842 3.79625 10.3401C3.69568 10.096 3.64444 9.83435 3.64549 9.57034C3.64653 9.30633 3.69984 9.04513 3.80233 8.80183C3.90482 8.55852 4.05447 8.33791 4.24265 8.15273L9.42798 2.9674L10.3707 3.91006L5.18532 9.0954C5.12164 9.15689 5.07086 9.23046 5.03592 9.31179C5.00098 9.39313 4.98259 9.48061 4.98182 9.56913C4.98105 9.65765 4.99792 9.74543 5.03144 9.82737C5.06496 9.9093 5.11446 9.98373 5.17705 10.0463C5.23965 10.1089 5.31408 10.1584 5.39601 10.1919C5.47795 10.2255 5.56573 10.2423 5.65425 10.2416C5.74277 10.2408 5.83025 10.2224 5.91159 10.1875C5.99292 10.1525 6.06649 10.1017 6.12798 10.0381L11.314 4.85273C11.4997 4.667 11.647 4.4465 11.7476 4.20383C11.8481 3.96116 11.8998 3.70106 11.8998 3.4384C11.8998 3.17573 11.8481 2.91564 11.7476 2.67296C11.647 2.43029 11.4997 2.2098 11.314 2.02406C11.1283 1.83833 10.9078 1.691 10.6651 1.59048C10.4224 1.48996 10.1623 1.43823 9.89965 1.43823C9.63698 1.43823 9.37689 1.48996 9.13422 1.59048C8.89155 1.691 8.67105 1.83833 8.48532 2.02406L3.29998 7.21006C2.69279 7.83874 2.35681 8.68074 2.3644 9.55473C2.372 10.4287 2.72256 11.2648 3.34059 11.8828C3.95862 12.5008 4.79466 12.8514 5.66865 12.859C6.54264 12.8666 7.38464 12.5306 8.01332 11.9234L13.6707 6.26673L14.6133 7.21006L8.95665 12.8667C8.08144 13.7419 6.89439 14.2336 5.65665 14.2336C4.41891 14.2336 3.23187 13.7419 2.35665 12.8667C1.48144 11.9915 0.989746 10.8045 0.989746 9.56673C0.989746 8.32899 1.48144 7.14194 2.35665 6.26673L7.54265 1.0814Z"
                fill="#AFAFB8"
              />
            </svg>
            <span>{t(`attachFileText`)}</span>
          </div>

          <div className="form-redesign__footer">
            <button
              className="form-redesign__featured-link"
              type="submit"
            >
              {t(`buttonText`)}
            </button>
            <div className="form-redesign__approval">
              {t(`approvalText`)}
              <Link
                href={t(`approvalLink`)}
              >
                {t(`approvalLinkText`)}
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="form-redesign__aside">
        <div className="form-redesign__aside-img">
          <Image
            src="/images/img-aside.png"
            alt=""
            fill
          />
        </div>
        <p>
          {t(`asideText`)}
          <Link
            href={t(`asideLink`)}
            className="form-redesign__aside-link"
          >
            {t(`asideLinkText`)}
          </Link>
        </p>
      </div>
    </section>
  );

  async function handleFormSubmit(event: FormEvent) {
    console.log(event);
  }
}
