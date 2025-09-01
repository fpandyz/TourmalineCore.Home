import { ReactNode, useRef } from 'react';
import { FooterRedesign } from '../FooterRedesign/FooterRedesign';
import { SkipLink } from '../../SkipLink/SkipLink';
import { HeaderRedesign } from '../HeaderRedesign/HeaderRedesign';
import { HeaderRedesignProps } from '../../../common/types';

export function LayoutRedesign({
  children,
  mainClassName,
  headerContent,
}: {
  children?: ReactNode;
  mainClassName?: string;
  headerContent: HeaderRedesignProps;
}) {
  const mainElementRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="layout-redesign">
      <SkipLink
        mainElementRef={mainElementRef}
      />
      <HeaderRedesign
        navigationLists={headerContent.navigationLists}
        button={headerContent.button}
        email={headerContent.email}
        socialLinks={headerContent.socialLinks}
      />
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
