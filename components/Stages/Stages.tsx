import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';
import StagesList from './components/StagesList/StagesList';
import { TStagesList } from './types';

export default function Stages() {
  const { t } = useTranslationNamespace('stages');

  const stagesList: TStagesList = t('list', { returnObjects: true });

  return (
    <section
      id={TechnologyPageAnchorLink.stages}
      className="stages"
    >
      <div className="container stages__wrapper">
        <h3 className="title-technology-type-1 stages__title">{t('title')}</h3>
        <StagesList list={stagesList} />
      </div>
    </section>
  );
}
