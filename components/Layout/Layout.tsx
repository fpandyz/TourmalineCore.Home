import clsx from 'clsx';
import { ReactNode } from 'react';
import { isChineseLanguage } from '../../common/utils/isChineseLanguage';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Layout({
  children,
  mainClassName,
}: {
  children: ReactNode;
  mainClassName?: string;
}) {
  return (
    <div className={clsx(`layout`, {
      'layout--zh': isChineseLanguage(),
    })}
    >
      <Header />
      <main className={mainClassName}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
