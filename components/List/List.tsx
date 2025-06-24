import { usePath } from '../../common/hooks/usePath';

export function List({
  steps,
}: {
  steps: string[];
}) {
  const {
    slicePathname,
  } = usePath();

  return (
    <ul className="list">
      {steps.map((text, index) => (
        <li
          key={text}
          className="list__item"
        >
          <div className={`list__number list__number--${slicePathname}`}>{index + 1}</div>
          <span className="list__text">{text}</span>
        </li>
      ))}
    </ul>
  );
}
