function Services() {
  return (
    <section className="section services">
      <h2 className="title-type-2 services__title">
        Предоставляем сотрудников
        {' '}
        <span className="services__gradient-title">владельцам продуктов и командам разработки</span>
      </h2>

      <div className="services__inner">
        <div className="services__block-first">
          <h3 className="title-type-3 services__subtitle">
            Возьмем на себя
            {' '}
            <span className="services__gradient-subtitle">технические решения</span>
          </h3>

          <p className="services__description">
            Вместе создадим ваш продукт с нуля
            и превратим идею в реальный проект.
            Мы разрабатываем корпоративные сайты и сложные системы, задействуя все направления разработки: дизайн,
            фронтенд, бэкенд, тестирование
            и машинное обучение.
          </p>
        </div>
        <div className="services__block-second">
          <h3 className="title-type-3 services__subtitle">
            Мы усилим вашу команду необходимой
            {' '}
            <span className="services__gradient-subtitle">экспертизой</span>
          </h3>

          <p className="services__description">
            Быстро вольемся в текущие задачи
            и поможем разрабатывать функционал быстрее. Настроим рабочий процесс, применив практики, которые хорошо работают для нас.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
