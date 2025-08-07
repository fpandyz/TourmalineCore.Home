import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { LangSwitchRedesign } from "./components/LangSwitchRedesign/LangSwitchRedesign";
import { HeaderButton } from "./components/HeaderButton/HeaderButton";
import { HeaderPopup } from "./components/HeaderPopup/HeaderPopup";
import { useBodyScrollHidden } from "../../../common/hooks/useBodyScrollHidden";
import { HeaderRedesignProps } from "../../../common/types";
import { useDeviceSize, useOnScrollDirections } from "../../../common/hooks";
import { HeaderNavigationList } from "./components/HeaderNavigationList/HeaderNavigationList";
import { AppRoute } from "../../../common/enums";

export function HeaderRedesign({
  navigationLists,
  button,
  email,
  socialLinks,
}: HeaderRedesignProps) {
  const {
    isTabletXl,
  } = useDeviceSize();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useBodyScrollHidden(isMobileMenuOpen);

  const {
    isScrollUp,
  } = useOnScrollDirections();

  return (
    <header
      className={clsx(`header-redesign`, {
        'header-redesign--hidden': !isScrollUp,
      })}
      data-testid="header-redesign"
    >
      <div className="header-redesign__inner container-redesign">
        <Link
          className="header-redesign__link-wrapper"
          href={AppRoute.Main}
        >
          <Image
            src="/images/logo.png"
            alt="Tourmaline core logo"
            fill
          />
        </Link>

        <HeaderNavigationList
          className="header-redesign__nav"
          navigationList={navigationLists}
        />

        <LangSwitchRedesign className="header-redesign__lang-switch" />

        <button
          className={clsx(`header-redesign__burger`, {
            'header-redesign__burger--open': isMobileMenuOpen,
          })}
          data-testid="header-redesign-burger"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="header-redesign__line" />
          <span className="header-redesign__line" />
        </button>

        <HeaderButton className="header-redesign__button">
          {button.label}
        </HeaderButton>
      </div>

      {isMobileMenuOpen && !isTabletXl && (
        <HeaderPopup
          navigationList={navigationLists}
          buttonLabel={button.label}
          email={email}
          socialLinks={socialLinks}
        />
      )}
    </header>
  );
}
