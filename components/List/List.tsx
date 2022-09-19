function List({
  steps,
}: {
  steps: string[];
}) {
  return (
    <ul className="list">
      {steps.map((text, index) => (
        <li
          key={text}
          className="list__item"
        >
          <div className="list__number">{index + 1}</div>
          <span className="list__text">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
