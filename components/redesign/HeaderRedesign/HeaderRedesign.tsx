import Link from "next/link";
import Image from "next/image";
import { LangSwitchRedesign } from "./components/LangSwitchRedesign/LangSwitchRedesign";
import { HeaderNavigation } from "./components/HeaderNavigation/HeaderNavigation";

export function HeaderRedesign() {
  return (
    <header
      className="header-redesign"
      data-testid="header-redesign"
    >
      <div className="header-redesign__inner container-redesign">
        <Link
          href="#"
          className="header-redesign__link-wrapper"
        >
          <Image
            src="/images/logo.png"
            alt="Tourmaline core logo"
            fill
          />
        </Link>
        <HeaderNavigation />
        <LangSwitchRedesign className="header-redesign__lang-switch" />
        <button
          className="header-redesign__button"
          type="button"
        >
          Обсудить проект
        </button>
      </div>
    </header>
  );
}
