import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function LayoutHomePage({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="layout-home-page">
      <div className="layout-home-page__header">
        <Header />
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
