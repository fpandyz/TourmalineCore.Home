import { useRouter } from 'next/router';

export default function TasksList({
  tasks,
}: {
  tasks: string[];
}) {
  const { pathname } = useRouter();

  return (
    <ul className="tasks__list">
      {tasks.map((text, index) => (
        <li
          key={text}
          className="tasks__item"
        >
          <div className={`tasks__number tasks__number--${pathname.slice(1)}`}>{index + 1}</div>
          <span className="tasks__text">{text}</span>
        </li>
      ))}
    </ul>
  );
}
