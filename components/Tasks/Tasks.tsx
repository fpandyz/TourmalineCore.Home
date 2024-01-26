import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import TasksList from './TasksList/TasksList';
import { AppRoute } from '../../common/utils/app-route';

export default function Tasks() {
  const { pathname } = useRouter();
  const { t } = useTranslation(getTranslationNamespace(pathname));

  const tasksList: string[] = t('list', { returnObjects: true });

  return (
    <section className="tasks">
      <div className="container tasks__wrapper">
        <div className="tasks__inner">
          <h3 className="title-technology-type-1 tasks__title">{t('title')}</h3>
          <TasksList tasks={tasksList} />
          <div className={`tasks__image tasks__image--${pathname.slice(1)}`} />
        </div>
      </div>
    </section>
  );

  function getTranslationNamespace(page: string) {
    switch (page) {
      case AppRoute.Frontend:
        return 'tasksFrontend';

      default:
        return '';
    }
  }
}
