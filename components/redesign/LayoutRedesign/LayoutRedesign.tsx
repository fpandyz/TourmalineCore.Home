import { ReactNode } from 'react';
import { Header } from '../../Header/Header';
import { FooterRedesign } from '../FooterRedesign/FooterRedesign';

export function LayoutRedesign({
  children,
  mainClassName,
}: {
  children?: ReactNode;
  mainClassName?: string;
}) {
  return (
    <div className="layout-redesign">
      <Header containerClass="container-redesign" />
      <main className={mainClassName}>
        {children}
      </main>
      <FooterRedesign />
    </div>
  );
}
