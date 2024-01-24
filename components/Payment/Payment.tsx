import PaymentList from './PaymentList/PaymentList';

const PAYMENT_TITLE = 'Модели оплаты';

export default function Payment() {
  return (
    <section className="payment">
      <div className="container payment__wrapper">
        <div className="title-technology-type-1 payment__title">{PAYMENT_TITLE}</div>
        <PaymentList />
      </div>
    </section>
  );
}
