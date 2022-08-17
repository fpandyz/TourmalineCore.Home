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
      <h2 className="title-type-3">{t('title')}</h2>
      <div className="work-structure__subtitle">{t('subtitle')}</div>

      <div className="work-structure__images">
        <div className="ratio ratio--16x9 work-structure__first-image">
          <Image
            src="/images/good-code.png"
            alt={t('altImageFirst')}
            layout="fill"
          />
        </div>
        <div className="ratio ratio--16x9 work-structure__second-image">
          <Image
            src="/images/good-work.png"
            alt={t('altImageSecond')}
            layout="fill"
          />
        </div>
      </div>

      <div className="caption work-structure__caption">{t('caption')}</div>
    </section>
  );
}

export default WorkStructure;
