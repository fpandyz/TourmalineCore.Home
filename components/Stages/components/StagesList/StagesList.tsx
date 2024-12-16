import usePath from '../../../../common/hooks/usePath';
import { TStagesList } from '../../types';

export default function StagesList({
  list,
}:{
  list: TStagesList
}) {
  const { slicePathname } = usePath();

  return (
    <ul className="stages-list">
      {list.map(({ title, description }, index) => (
        <li
          key={title}
          className="stages-list__item"
        >
          <div className={`stages-list__number stages-list__number--${slicePathname}`}>{index + 1}</div>
          <div className="stages-list__inner">
            <span className="title-technology-type-3 stages-list-title">{title}</span>
            <span className={`stages-list__description stages-list__description--${slicePathname}`}>{description}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
