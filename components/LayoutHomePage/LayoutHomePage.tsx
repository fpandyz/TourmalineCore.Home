import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroBlock from '../HeroBlock/HeroBlock';

function LayoutHomePage({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="layout-home-page">
      <div className="layout-home-page__header">
        <Header />
        <HeroBlock />
      </div>
      <main className="container layout-home-page__wrapper">
        <div className="layout-home-page__nav">
          navigations
        </div>
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default LayoutHomePage;
