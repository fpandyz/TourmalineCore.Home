import { useRouter } from 'next/router';

function List({
  steps,
}: {
  steps: string[];
}) {
  const { pathname } = useRouter();

  return (
    <ul className="list">
      {steps.map((text, index) => (
        <li
          key={text}
          className="list__item"
        >
          <div className={`list__number list__number--${pathname.slice(1)}`}>{index + 1}</div>
          <span className="list__text">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
