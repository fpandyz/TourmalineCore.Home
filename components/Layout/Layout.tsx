import clsx from 'clsx';
import { ReactNode } from 'react';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={clsx('layout', {
      'layout--zh': isChineseLanguage(),
    })}
    >
      <Header />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
