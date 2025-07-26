import { HeaderAccordion } from "../HeaderAccordion/HeaderAccordion";
import { HeaderButton } from "../HeaderButton/HeaderButton";

export function HeaderMobileMenu() {
  return (
    <div className="header-mobile-menu container-redesign">
      <nav className="header-mobile-menu__navigation">
        <ul className="header-mobile-menu__list">
          <li className="header-mobile-menu__list-item">
            <HeaderAccordion className="header-mobile-menu__accordion" />
          </li>
        </ul>
      </nav>
      <HeaderButton />
    </div>
  );
}
