import { PaymentList } from './components/PaymentList/PaymentList';
import { TPaymentList } from './types';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import { TechnologyPageAnchorLink } from '../../common/enums';

export function Payment() {
  const {
    t,
  } = useTranslationNamespace(`payment`);

  const paymentList: TPaymentList = t(`list`, {
    returnObjects: true,
  });

  return (
    <section
      id={TechnologyPageAnchorLink.Payment}
      className="payment"
    >
      <div className="container payment__wrapper">
        <h2 className="title-technology-type-1 payment__title">{t(`title`)}</h2>
        <PaymentList list={paymentList} />
      </div>
    </section>
  );
}
