import Link from "next/link";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { HeaderNavigationItem, HeaderNavigationListRedesign } from "../HeaderNavigationListRedesign/HeaderNavigationListRedesign";

export function HeaderPopup({
  navigationList,
}: {
  navigationList: HeaderNavigationItem[];
}) {
  return (
    <div className="header-popup container-redesign">
      <HeaderNavigationListRedesign
        className="header-popup__nav"
        navigationList={navigationList}
      />

      <HeaderButton className="header-popup__button" />

      <div className="header-popup__footer">
        <div className="header-popup__contact">
          <span className="header-popup__caption">По всем вопросам</span>
          <Link
            className="header-popup__email"
            href="mailto:contact@tourmalinecore.com"
          >
            contact@tourmalinecore.com
          </Link>
        </div>
        <nav className="header-popup__nav">
          <ul className="header-popup__list">
            <li className="header-popup__list-item">
              <Link
                className="header-popup__link"
                href="#"
              >
                VK
              </Link>
            </li>
            <li className="header-popup__list-item">
              <Link
                className="header-popup__link"
                href="#"
              >
                Habr
              </Link>
            </li>
            <li className="header-popup__list-item">
              <Link
                className="header-popup__link"
                href="#"
              >
                GitHub
              </Link>
            </li>
            <li className="header-popup__list-item">
              <Link
                className="header-popup__link"
                href="#"
              >
                Telegram
              </Link>
            </li>
            <li className="header-popup__list-item">
              <Link
                className="header-popup__link"
                href="#"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
