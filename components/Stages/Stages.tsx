import { useEffect, useState } from 'react';
import AOS from 'aos';
import usePath from '../../common/hooks/usePath';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';
import StagesList from './components/StagesList/StagesList';
import { TStagesList } from './types';
import useDeviceSize from '../../common/hooks/useDeviceSize';

export default function Stages() {
  const { slicePathname } = usePath();

  const { t } = useTranslationNamespace('stages');

  const stagesList: TStagesList = t('list', { returnObjects: true });

  const [clickedAccarion, setClickedAccarion] = useState(false);
  const deviceSize = useDeviceSize();
  useEffect(() => {
    AOS.refresh();
  }, [deviceSize.width, clickedAccarion]);

  return (
    <section
      id={TechnologyPageAnchorLink.Stages}
      className="stages"
    >
      <div className="container stages__wrapper">
        <h3 className={`title-technology-type-1 stages__title stages__title--${slicePathname}`}>{t('title')}</h3>
        <StagesList
          list={stagesList}
          clickedAccarion={() => setClickedAccarion(!clickedAccarion)}
        />
      </div>
    </section>
  );
}
