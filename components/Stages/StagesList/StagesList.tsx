import { TStagesList } from '../types';

export default function StagesList({
  list,
}:{
  list: TStagesList
}) {
  return (
    <ul className="stages-list">
      {list.map(({ title, description }, index) => (
        <li
          key={title}
          className="stages-list__item"
        >
          <div className="stages-list__number">{index + 1}</div>
          <div className="stages-list__inner">
            <span className="title-technology-type-3 stages-list-title">{title}</span>
            <span className="stages-list__description">{description}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
