import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
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
  // ToDo: uncomment after editing the form
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useBodyScrollHidden(isMobileMenuOpen);

  const {
    isScrollUp,
  } = useOnScrollDirections();

  const {
    locale,
  } = useRouter();

  return (
    <header
      className={clsx(`header-redesign`, {
        'header-redesign--hidden': !isScrollUp && !isMobileMenuOpen,
      })}
      data-testid="header-redesign"
    >
      <div className="header-redesign__inner container-redesign">
        <Link
          className="header-redesign__logo-wrapper"
          href={AppRoute.Main}
          aria-label={
            locale === `ru`
              ? `Ссылка на главную страницу`
              : `Link to home page`
          }
        >
          <Image
            src="/images/logo.png"
            alt="Tourmaline core logo"
            aria-hidden="true"
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
          aria-label={
            locale === `ru`
              ? `Открыть мобильное меню`
              : `Open mobile menu`
          }
        >
          <span className="header-redesign__line" />
          <span className="header-redesign__line" />
        </button>

        {isTabletXl && (
          <HeaderButton
            className="header-redesign__button"
          >
            {button.label}
          </HeaderButton>
        )}
      </div>

      {isMobileMenuOpen && !isTabletXl && (
        <HeaderPopup
          navigationList={navigationLists}
          buttonLabel={button.label}
          email={email}
          socialLinks={socialLinks}
          // ToDo: uncomment after editing the form
          // setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* ToDo: uncomment after editing the form */}
      {/* {isModalOpen && <FormModal setIsOpen={setIsModalOpen} />} */}
    </header>
  );
}
