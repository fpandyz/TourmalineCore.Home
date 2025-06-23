import { useTranslation } from 'next-i18next';
import { List } from '../List/List';

export function DiscussionList() {
  const {
    t,
  } = useTranslation(`discussion`);

  const steps: string[] = t(`steps`, {
    returnObjects: true,
  });

  return (
    <div className="discussion__list">
      <div className="title-type-4 discussion__list-title">{t(`modalListTitle`)}</div>
      <List steps={steps} />
    </div>
  );
}
