import { ReactNode, useRef } from 'react';
import { Header } from '../../Header/Header';
import { FooterRedesign } from '../FooterRedesign/FooterRedesign';
import { SkipLink } from '../../SkipLink/SkipLink';

export function LayoutRedesign({
  children,
  mainClassName,
}: {
  children?: ReactNode;
  mainClassName?: string;
}) {
  const mainElementRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="layout-redesign">
      <SkipLink
        mainElementRef={mainElementRef}
      />
      <Header containerClass="container-redesign" />
      <main
        id="main-content"
        ref={mainElementRef}
        className={mainClassName}
      >
        {children}
      </main>
      <FooterRedesign />
    </div>
  );
}
