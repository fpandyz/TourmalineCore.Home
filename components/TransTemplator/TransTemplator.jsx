import { Trans } from 'react-i18next';

export default function TransTemplator({
  t,
  children,
}) {
  return (
    <Trans
      t={t}
      components={{
        bold: <b />,
        blue: <span className="blue-text" />,
        green: <span className="green-text" />,
        red: <span className="red-text" />,
        yellow: <span className="yellow-text" />,
      }}
    >
      {children}
    </Trans>
  );
}
