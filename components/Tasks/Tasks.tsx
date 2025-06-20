import { TasksList } from './components/TasksList/TasksList';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import { usePath } from '../../common/hooks/usePath';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export function Tasks() {
  const { slicePathname } = usePath();
  const { t } = useTranslationNamespace('tasks');

  const tasksList: string[] = t('list', { returnObjects: true });

  return (
    <section
      id={TechnologyPageAnchorLink.Tasks}
      className="tasks"
    >
      <div className="container tasks__wrapper">
        <div className="tasks__inner">
          <h2 className="title-technology-type-1 tasks__title">{t('title')}</h2>
          <TasksList tasks={tasksList} />
          <div className={`tasks__image tasks__image--${slicePathname}`}>
            <div className={`tasks__react-animation tasks__react-animation--${slicePathname}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
