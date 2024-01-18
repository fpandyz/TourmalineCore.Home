import { useRouter } from 'next/router';

// TODO add data from json
export default function Points() {
  const pointsList = ['Доработаем существующую систему согласно требованиям', 'Увеличим производительность системы', 'Разработаем клиентскую часть с нуля'];
  const { pathname } = useRouter();

  return (
    <section className="points">
      <div className="container points__wrapper">
        <div className="points__inner">
          <h3 className="points__title">
            Создаем адаптивные
            кроссбраузерные интерфейсы
            для любых направлений бизнеса
          </h3>
          <ul className="points__list">
            {pointsList.map((text) => (
              <li
                key={text}
                className="points__item"
              >
                <span className="points__text">{text}</span>
              </li>
            ))}
          </ul>
          <div className={`points__image points__image--${pathname.slice(1)}`} />
        </div>
      </div>
    </section>
  );
}
