import clsx from 'clsx';
import { ReactNode } from 'react';
import useIsChineseLanguage from '../../common/hooks/useIsChineseLanguage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={clsx('layout', {
      'layout--zh': useIsChineseLanguage(),
    })}
    >
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
