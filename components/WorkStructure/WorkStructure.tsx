import { useTranslation } from 'next-i18next';

function WorkStructure() {
  const { t } = useTranslation('workStructure');

  return (
    <section className="section work-structure">
      <h2 className="title-type-3">{t('title')}</h2>
      <div className="work-structure__subtitle">{t('subtitle')}</div>

    </section>
  );
}

export default WorkStructure;
