import clsx from 'clsx';
import { ReactNode, useRef } from 'react';
import { isChineseLanguage } from '../../common/utils/isChineseLanguage';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SkipLink } from '../SkipLink/SkipLink';

export function Layout({
  children,
  mainClassName,
}: {
  children: ReactNode;
  mainClassName?: string;
}) {
  const mainElementRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className={clsx(`layout`, {
      'layout--zh': isChineseLanguage(),
    })}
    >
      <SkipLink
        mainElementRef={mainElementRef}
      />
      <Header />
      <main
        id="main-content"
        ref={mainElementRef}
        className={mainClassName}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
