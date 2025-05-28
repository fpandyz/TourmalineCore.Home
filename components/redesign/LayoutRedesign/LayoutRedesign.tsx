import { ReactNode } from 'react';
import Header from '../../Header/Header';

export function LayoutRedesign({
  children,
  mainClassName,
}: {
  children?: ReactNode;
  mainClassName?: string;
}) {
  return (
    <div className="layout-redesign">
      <Header />
      <main className={mainClassName}>
        {children}
      </main>
    </div>
  );
}
