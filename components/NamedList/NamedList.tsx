export default function NamedList(
  {
    title,
    data,
  }: {
    title: string,
    data: string[]
  },
) {
  return (
    <div className="named-list">
      <h4 className="title-technology-type-3 named-list__title">{title}</h4>
      <ul className="named-list__items">
        {data.map((text) => (
          <li
            key={text}
            className="named-list__item"
          >
            <span className="named-list__text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
