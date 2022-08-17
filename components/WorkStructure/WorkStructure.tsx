import { useTranslation } from 'next-i18next';
import Image from 'next/image';

function WorkStructure({
  id,
}: {
  id: string;
}) {
  const { t } = useTranslation('workStructure');

  return (
    <section id={id} className="section work-structure">
      <div className="container container--home-page">
        <h2 className="title-type-3">{t('title')}</h2>
        <div className="work-structure__subtitle">{t('subtitle')}</div>

        <div className="work-structure__images">
          <div className="ratio ratio--16x9 work-structure__first-image">
            <Image
              src="/images/good-code.png"
              layout="fill"
            />
          </div>
          <div className="ratio ratio--16x9 work-structure__second-image">
            <Image
              src="/images/good-work.png"
              layout="fill"
            />
          </div>
        </div>

        <div className="caption work-structure__caption">{t('caption')}</div>
      </div>
    </section>
  );
}

export default WorkStructure;
