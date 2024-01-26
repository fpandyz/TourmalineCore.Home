import { TPaymentList } from '../../../common/utils/types/payment';
import NamedList from '../../NamedList/NamedList';

export default function PaymentList({
  list,
}:{
  list: TPaymentList
}) {
  return (
    <ul className="payment-list">
      {list.map(({ mainTitle, mainData }) => (
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
