import { useTranslation } from 'next-i18next';
import { scroller } from 'react-scroll';

import HeroBlock from '../HeroBlock/HeroBlock';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

function HeroBlockHomePage({
  firstBlockSelector,
}: {
  firstBlockSelector: string;
}) {
  const { t } = useTranslation('heroBlockHomePage');

  return (
    <HeroBlock
      title={t('title')}
      gradientTitle={t('gradientTitle')}
      description={t('description')}
      Button={(
        <SecondaryButton
          onClick={scrollFirstBlock}
          text={t('buttonText')}
        />
      )}
    />
  );

  function scrollFirstBlock() {
    const firstBlock = document.querySelector(`#${firstBlockSelector} div`);

    const firstBlockName = firstBlock?.getAttribute('name');

    scroller.scrollTo(firstBlockName as string, {
      smooth: 'smooth',
    });
  }
}

export default HeroBlockHomePage;
