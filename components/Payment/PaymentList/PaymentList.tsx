/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useTranslation } from 'next-i18next';
import NamedList from '../../NamedList/NamedList';

// const PAYMENT_LIST = [
//   {
//     mainTitle: 'Почасовая оплата',
//     mainData: [
//       {
//         title: 'Для чего',
//         data: ['Разработка крупных систем и R&D проектов'],
//       },
//       {
//         namedListTitle: 'Условия',
//         namedListData: ['Фиксируем не сроки, а желаемый результат и ставки разработчиков'],
//       },
//     ],
//   },
//   {
//     paymentListTitle: 'Фиксированная стоимость',
//     paymentListData: [
//       {
//         namedListTitle: 'Для чего',
//         namedListData: ['Небольшие и предсказуемые проекты'],
//       },
//       {
//         namedListTitle: 'Условия',
//         namedListData: ['Фиксируем сроки, стоимость и объем работ'],
//       },
//     ],
//   },
// ];

export default function PaymentList() {
  const { t } = useTranslation('paymentFrontend');

  const paymentList: string[] = t('list', { returnObjects: true });

  return (
    <ul className="payment-list">
      {paymentList.map(({ mainTitle, mainData }) => (
        <li key={mainTitle} className="payment-list__item">
          <h4 className="title-technology-type-2 payment-list__title">{mainTitle}</h4>
          <div className="payment-list__inner">
            {mainData.map(({ title, data }) => (
              <NamedList title={title} data={data} listClassName="payment-list__named-list" />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
