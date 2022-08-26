import { ReactNode, useRef } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroBlockHomePage from '../HeroBlockHomePage/HeroBlockHomePage';
import Navigation from '../Navigation/Navigation';
import { NavigationLinks } from '../../utils/consts/navigation';

function LayoutHomePage({
  children,
  navigationLinks,
}: {
  children: ReactNode;
  navigationLinks: NavigationLinks[];
}) {
  const refMain = useRef<HTMLElement>(null);

  return (
    <div className="layout-home-page">
      <div className="layout-home-page__header">
        <Header />
        <HeroBlockHomePage firstBlockSelector={navigationLinks[0]} />
      </div>
      <main
        ref={refMain}
        className="layout-home-page__wrapper"
        onMouseMove={(e) => {
          if (!refMain.current) {
            return;
          }

          const x = (e.pageX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;

          refMain.current.style.backgroundImage = `
          radial-gradient(ellipse farthest-corner at 0% 0%, #06040f, transparent),
          radial-gradient(ellipse farthest-corner at ${0 - 30}% ${y}%, #06040f ${x - 40}%, transparent),
          radial-gradient(ellipse farthest-side at 90% 0%, #e474f150, transparent 50%),
          radial-gradient(ellipse farthest-side at 100% 50%, #4fdae228, transparent),
          radial-gradient(ellipse farthest-side at ${x}% ${y}%, #4fdae228 20%, transparent),
          radial-gradient(ellipse farthest-side at 100% 100%, #4fdae228, transparent)`;
        }}
      >
        <Navigation navigationLinks={navigationLinks} />
        <div className="layout-home-page__content">
          {children}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default LayoutHomePage;
