import { useRouter } from 'next/router';

export default function TasksList({
  tasks,
}: {
  tasks: string[];
}) {
  const { pathname } = useRouter();

  return (
    <ul className="tasks-list">
      {tasks.map((text, index) => (
        <li
          key={text}
          className="tasks-list__item"
        >
          <div className={`tasks-list__number tasks-list__number--${pathname.slice(1)}`}>{index + 1}</div>
          <span className="tasks-list__text">{text}</span>
        </li>
      ))}
    </ul>
  );
}
