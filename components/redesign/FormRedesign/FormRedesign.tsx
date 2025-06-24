import { useTranslation } from 'next-i18next';

export function FormRedesign() {
  const {
    t,
  } = useTranslation(`formRedesign`);

  return (
    <section
      className="form-redesign container-redesign"
      data-testid="form"
    >
      <div className="form-redesign__container">
        {t(`title`)}
      </div>
    </section>
  );
}
