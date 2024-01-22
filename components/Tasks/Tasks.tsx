import { useRouter } from 'next/router';
import TasksList from '../TasksList/TasksList';

const TASKS_LIST = ['Адаптивная и кроссбраузерная верстка', 'Миграция legacy-проектов на актуальные технологии', 'Разработка SPA-приложений', 'Разработка публичных веб-сайтов'];
const TASKS_TITLE = 'Задачи, которые мы решаем';

// TODO add data from json
export default function Tasks() {
  const { pathname } = useRouter();

  return (
    <section className="tasks">
      <div className="container tasks__wrapper">
        <div className="tasks__inner">
          <h3 className="title-technology tasks__title">{TASKS_TITLE}</h3>
          <TasksList tasks={TASKS_LIST} />
          <div className={`tasks__image tasks__image--${pathname.slice(1)}`} />
        </div>
      </div>
    </section>
  );
}
