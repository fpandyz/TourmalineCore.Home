import NamedList from '../NamedList/NamedList';
import usePath from '../../common/hooks/usePath';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';

type StackList = {
  title: string;
  data: string[]
}[];

export default function Stack() {
  const { slicePathname } = usePath();

  const { t } = useTranslationNamespace('stack');

  const stackList: StackList = t('list', { returnObjects: true });

  return (
    <section className="stack">
      <div className="container stack__wrapper">
        <div className="stack__inner">
          <div className="title-technology-type-1 stack__title">{t('title')}</div>
          <div className="stack__list">
            {stackList.map(({ title, data }) => (
              <NamedList key={title} title={title} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className={`stack__image stack__image--${slicePathname}`} />
    </section>
  );
}
