import TasksList from './components/TasksList/TasksList';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import usePath from '../../common/hooks/usePath';

export default function Tasks() {
  const { slicePathname } = usePath();
  const { t } = useTranslationNamespace('tasks');

  const tasksList: string[] = t('list', { returnObjects: true });

  return (
    <section className="tasks">
      <div className="container tasks__wrapper">
        <div className="tasks__inner">
          <h3 className="title-technology-type-1 tasks__title">{t('title')}</h3>
          <TasksList tasks={tasksList} />
          <div className={`tasks__image tasks__image--${slicePathname}`} />
        </div>
      </div>
    </section>
  );
}
