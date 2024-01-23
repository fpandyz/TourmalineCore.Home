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
    <ul className="named-list">
      <h4 className="title-technology-type-2 named-list__title">{title}</h4>
      {data.map((text) => (
        <li
          key={text}
          className="named-list__item"
        >
          <span className="named-list__text">{text}</span>
        </li>
      ))}
    </ul>
  );
}
