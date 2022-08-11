import { Carousel } from 'react-responsive-carousel';
import ProcessCard from './ProcessCard/ProcessCard';

function Process() {
  return (
    <section className="section process">
      <h2 className="title-type-3">Процесс</h2>
      <div className="process__subtitle">Двигаемся к конечной цели еженедельными спринтами, проводим планирования и демо клиенту</div>

      <div className="process__content">
        <ProcessCard>
          <div className="process-card__content">

            <div className="process-card__title">Sprint</div>

            <div>Цели:</div>
            <ol className="process-card__list">
              <li>Добавить в ядро бэка все валидаторы и преобразователи</li>
              <li>2 преобразователя и 2 валидатора интегрировать в бэк</li>
              <li>Добавить изменения на фронте в валидаторы и преобразователи</li>
              <li>Проверять наличие изменений в сорс-фидах для запуска преобразований</li>
              <li>Вывод содержимого в преобразователях и валидаторах</li>
            </ol>
          </div>
        </ProcessCard>

        <ProcessCard>
          <div className="process-card__content">
            <div> По результатам демо:</div>
            <ol className="process-card__list">
              <li>Использовали новый дизайн</li>
              <li>Начали использовать хранилище S3</li>
              <li>Научились получать ответ от Циана с результатами валидации</li>
            </ol>

            <div>Цели на спринт:</div>
            <ol className="process-card__list">
              <li>Наладить работу бэкенда с площадками</li>
              <li>UX работы с площадками</li>
            </ol>

            <div>О чём договорились:</div>
            <div>Упростить работу с валидаторами и преобразователями после MVP</div>
          </div>
        </ProcessCard>
      </div>

      <div
        className="completed-projects__carousel"
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <ProcessCard>
            <div className="process-card__content">
              <div> По результатам демо:</div>
              <ol className="process-card__list">
                <li>Использовали новый дизайн</li>
                <li>Начали использовать хранилище S3</li>
                <li>Научились получать ответ от Циана с результатами валидации</li>
              </ol>

              <div>Цели на спринт:</div>
              <ol className="process-card__list">
                <li>Наладить работу бэкенда с площадками</li>
                <li>UX работы с площадками</li>
              </ol>

              <div>О чём договорились:</div>
              <div>Упростить работу с валидаторами и преобразователями после MVP</div>
            </div>
          </ProcessCard>

          <ProcessCard>
            <div className="process-card__content">

              <div className="process-card__title">Sprint</div>

              <div>Цели:</div>
              <ol className="process-card__list">
                <li>Добавить в ядро бэка все валидаторы и преобразователи</li>
                <li>2 преобразователя и 2 валидатора интегрировать в бэк</li>
                <li>Добавить изменения на фронте в валидаторы и преобразователи</li>
                <li>Проверять наличие изменений в сорс-фидах для запуска преобразований</li>
                <li>Вывод содержимого в преобразователях и валидаторах</li>
              </ol>
            </div>
          </ProcessCard>
        </Carousel>
      </div>
      <div className="caption process__caption">Скриншоты результатов демо и планирования с заказчиком</div>
    </section>
  );
}

export default Process;
