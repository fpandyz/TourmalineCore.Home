import { TCooperationList } from '../../types';

export default function CooperationList({
  list,
}: {
  list: TCooperationList
}) {
  return (
    <ul className="cooperation-list">
      {list.map(({ title, description }) => (
        <li key={title} className="cooperation-list__item">
          <h3 className="title-technology-type-2 cooperation-list__title">{title}</h3>
          <span className="title-technology-type-3 cooperation-list__description">{description}</span>
        </li>
      ))}
    </ul>
  );
}
