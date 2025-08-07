import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { LangSwitchRedesign } from "./components/LangSwitchRedesign/LangSwitchRedesign";
import { HeaderButton } from "./components/HeaderButton/HeaderButton";
import { HeaderPopup } from "./components/HeaderPopup/HeaderPopup";
import { useBodyScrollHidden } from "../../../common/hooks/useBodyScrollHidden";
import { HeaderRedesignProps } from "../../../common/types";
import { useDeviceSize, useOnScrollDirections } from "../../../common/hooks";
import { HeaderNavigationList } from "./components/HeaderNavigationList/HeaderNavigationList";

export function HeaderRedesign() {
  const {
    t,
  } = useTranslation(`headerRedesign`);

  const {
    isTabletXl,
  } = useDeviceSize();

  const headerNavigationLists: HeaderRedesignProps["navigationLists"] = t(`navigationLists`, {
    returnObjects: true,
  });

  const headerButton: HeaderRedesignProps["button"] = t(`button`, {
    returnObjects: true,
  });

  const headerEmail: HeaderRedesignProps["email"] = t(`email`, {
    returnObjects: true,
  });

  const headerSocialLinks: HeaderRedesignProps["socialLinks"] = t(`socialLinks`, {
    returnObjects: true,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useBodyScrollHidden(isMobileMenuOpen);

  const isHidden = useOnScrollDirections();

  return (
    <header
      className={clsx(`header-redesign`, {
        'header-redesign--hidden': isHidden,
      })}
      data-testid="header-redesign"
    >
      <div className="header-redesign__inner container-redesign">
        <Link
          className="header-redesign__link-wrapper"
          href="/"
        >
          <Image
            src="/images/logo.png"
            alt="Tourmaline core logo"
            fill
          />
        </Link>

        <HeaderNavigationList
          className="header-redesign__nav"
          navigationList={headerNavigationLists}
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
          {headerButton.label}
        </HeaderButton>
      </div>

      {isMobileMenuOpen && !isTabletXl && (
        <HeaderPopup
          navigationList={headerNavigationLists}
          buttonLabel={headerButton.label}
          email={headerEmail}
          socialLinks={headerSocialLinks}
        />
      )}
    </header>
  );
}
