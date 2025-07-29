import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { LangSwitchRedesign } from "./components/LangSwitchRedesign/LangSwitchRedesign";
import { HeaderButton } from "./components/HeaderButton/HeaderButton";
import { HeaderPopup } from "./components/HeaderPopup/HeaderPopup";
import { HeaderNavigationItem } from "./components/HeaderNavigationListRedesign/HeaderNavigationListRedesign";
import { useBodyScrollHidden } from "../../../common/hooks/useBodyScrollHiden";

export function HeaderRedesign() {
  const {
    t,
  } = useTranslation(`headerRedesign`);

  const headerNavigationLists: HeaderNavigationItem[] = t(`navigationLists`, {
    returnObjects: true,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useBodyScrollHidden(isMobileMenuOpen);

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const bodyElement = document.querySelector(`body`);
    const handleScroll = () => {
      const currentScrollY = bodyElement?.scrollTop || 0;

      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 50) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 50) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    bodyElement?.addEventListener(`scroll`, handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [lastScrollY]);

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

        {/* <HeaderNavigationListRedesign navigationList={headerNavigationLists} /> */}

        <LangSwitchRedesign className="header-redesign__lang-switch" />

        <button
          className={clsx(`header-redesign__burger`, {
            'header-redesign__burger--open': isMobileMenuOpen,
          })}
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="header-redesign__line" />
          <span className="header-redesign__line" />
        </button>

        <HeaderButton className="header-redesign__button" />
      </div>

      {isMobileMenuOpen && (
        <HeaderPopup navigationList={headerNavigationLists} />
      )}
    </header>
  );
}
