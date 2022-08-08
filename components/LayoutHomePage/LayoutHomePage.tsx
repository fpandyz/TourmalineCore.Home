import { ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroBlock from '../HeroBlock/HeroBlock';
import Navigation from '../Navigation/Navigation';
import { NavigationLinks } from '../../utils/consts/navigation';

function LayoutHomePage({
  children,
  navigationLinks,
}: {
  children: ReactNode;
  navigationLinks: NavigationLinks[];
}) {
  return (
    <div className="layout-home-page">
      <div className="layout-home-page__header">
        <Header />
        <HeroBlock />
      </div>
      <main className="container layout-home-page__wrapper">
        <div className="layout-home-page__nav">
          <Navigation navigationLinks={navigationLinks} />
        </div>
        <div className="layout-home-page__content">
          {children}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default LayoutHomePage;
