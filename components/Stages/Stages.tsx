import { useState } from 'react';
import { usePath } from '../../common/hooks/usePath';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';
import { StagesList } from './components/StagesList/StagesList';
import { TStagesList } from './types';

export function Stages() {
  const {
    slicePathname,
  } = usePath();

  const {
    t,
  } = useTranslationNamespace(`stages`);

  const stagesList: TStagesList = t(`list`, {
    returnObjects: true,
  });

  const [clickedAccordion, setClickedAccordion] = useState(false);

  return (
    <section
      id={TechnologyPageAnchorLink.Stages}
      className="stages"
    >
      <div className="container stages__wrapper">
        <h3 className={`title-technology-type-1 stages__title stages__title--${slicePathname}`}>{t(`title`)}</h3>
        <StagesList
          list={stagesList}
          clickedAccordion={() => setClickedAccordion(!clickedAccordion)}
        />
      </div>
    </section>
  );
}
