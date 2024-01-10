import clsx from 'clsx';
import { useRouter } from 'next/router';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function HeroBlockTechnology({
  title,
  description,
}: {
  title: string,
  description: string,
}) {
  const { pathname } = useRouter();

  const slicePathname = pathname.slice(1);

  return (
    <section className={clsx('hero-block-technology', {
      'hero-block-technology--zh': isChineseLanguage(),
    })}
    >
      <div className="container hero-block-technology__wrapper">
        <div className="hero-block-technology__inner">
          <h3 className="hero-block-technology__title">{title}</h3>
          <div className="hero-block-technology__description">{description}</div>

          <PrimaryButton className={`hero-block-technology__button hero-block-technology__button--${slicePathname}`}>
            Оставить заявку
          </PrimaryButton>

        </div>
        <div className={`hero-block-technology__image hero-block-technology__image--${slicePathname}`} />
      </div>
    </section>
  );
}

export default HeroBlockTechnology;
