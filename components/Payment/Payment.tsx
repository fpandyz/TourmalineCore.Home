import { useTranslation } from 'next-i18next';
import { TPaymentList } from '../../common/utils/types/payment';
import PaymentList from './PaymentList/PaymentList';

export default function Payment() {
  const { t } = useTranslation('payment');

  const paymentList: TPaymentList = t('list', { returnObjects: true });

  return (
    <section className="payment">
      <div className="container payment__wrapper">
        <div className="title-technology-type-1 payment__title">{t('title')}</div>
        <PaymentList list={paymentList} />
      </div>
    </section>
  );
}
