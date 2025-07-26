import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { LangSwitchRedesign } from "./components/LangSwitchRedesign/LangSwitchRedesign";
import { HeaderMobileMenu } from "./components/HeaderMobileMenu/HeaderMobileMenu";
import { HeaderButton } from "./components/HeaderButton/HeaderButton";
// import { HeaderNavigation } from "./components/HeaderNavigation/HeaderNavigation";

export function HeaderRedesign() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="header-redesign"
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

        {/* <HeaderNavigation /> */}

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
        <HeaderMobileMenu />
      )}
    </header>
  );
}
