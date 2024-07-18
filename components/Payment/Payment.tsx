import { useTranslation } from 'next-i18next';
import PaymentList from './components/PaymentList/PaymentList';
import { TPaymentList } from './types';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export default function Payment() {
  const { t } = useTranslation('payment');

  const paymentList: TPaymentList = t('list', { returnObjects: true });

  return (
    <section
      id={TechnologyPageAnchorLink.Payment}
      className="payment"
    >
      <div className="container payment__wrapper">
        <div className="title-technology-type-1 payment__title">{t('title')}</div>
        <PaymentList list={paymentList} />
      </div>
    </section>
  );
}
