import { useRouter } from 'next/router';
import NamedList from '../NamedList/NamedList';

const STACK_TITLE = 'Стек технологий';
const STACK_LIST = [
  {
    title: 'Языки и фреймворки',
    data: ['JavaScript', 'React', 'SCSS', 'HTML', 'TypeScript', 'Electron', 'NextJS'],
  },
  {
    title: 'Библиотеки и инструменты',
    data: ['MobX', 'Create React App', 'BEM', 'Redux Toolkit', 'Storyblok', 'Storybook'],
  },
];

export default function Stack() {
  const { pathname } = useRouter();

  return (
    <section className="stack">
      <div className="container stack__wrapper">
        <div className="stack__inner">
          <div className="title-technology-type-1 stack__title">{STACK_TITLE}</div>
          <div className="stack__list">
            {STACK_LIST.map(({ title, data }) => (
              <NamedList title={title} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className={`stack__image stack__image--${pathname.slice(1)}`} />
    </section>
  );
}
