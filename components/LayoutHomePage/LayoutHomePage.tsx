import { ReactNode } from 'react';

import clsx from 'clsx';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroBlockHomePage from '../HeroBlockHomePage/HeroBlockHomePage';
import Navigation from '../Navigation/Navigation';
import useIsChineseLanguage from '../../common/hooks/useIsChineseLanguage';
import { NavigationLinks } from '../../common/utils/consts/navigation';

function LayoutHomePage({
  children,
  navigationLinks,
}: {
  children: ReactNode;
  navigationLinks: NavigationLinks[];
}) {
  return (
    <div className={clsx('layout-home-page', {
      'layout--zh': useIsChineseLanguage(),
    })}
    >
      <div className="layout-home-page__header">
        <Header />
        <HeroBlockHomePage firstBlockSelector={navigationLinks[0]} />
      </div>

      <main className="layout-home-page__wrapper">
        <Navigation
          navigationLinks={navigationLinks}
        />
        <div className="layout-home-page__content">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LayoutHomePage;
