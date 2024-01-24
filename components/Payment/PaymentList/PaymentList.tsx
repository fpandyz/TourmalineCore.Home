import NamedList from '../../NamedList/NamedList';

const PAYMENT_LIST = [
  {
    paymentListTitle: 'Почасовая оплата',
    paymentListData: [
      {
        namedListTitle: 'Для чего',
        namedListData: ['Разработка крупных систем и R&D проектов'],
      },
      {
        namedListTitle: 'Условия',
        namedListData: ['Фиксируем не сроки, а желаемый результат и ставки разработчиков'],
      },
    ],
  },
  {
    paymentListTitle: 'Фиксированная стоимость',
    paymentListData: [
      {
        namedListTitle: 'Для чего',
        namedListData: ['Небольшие и предсказуемые проекты'],
      },
      {
        namedListTitle: 'Условия',
        namedListData: ['Фиксируем сроки, стоимость и объем работ'],
      },
    ],
  },
];

export default function PaymentList() {
  return (
    <ul className="payment-list">
      {PAYMENT_LIST.map(({ paymentListTitle, paymentListData }) => (
        <li key={paymentListTitle} className="payment-list__item">
          <h4 className="title-technology-type-2 payment-list__title">{paymentListTitle}</h4>
          <div className="payment-list__inner">
            {paymentListData.map(({ namedListTitle, namedListData }) => (
              <NamedList title={namedListTitle} data={namedListData} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
