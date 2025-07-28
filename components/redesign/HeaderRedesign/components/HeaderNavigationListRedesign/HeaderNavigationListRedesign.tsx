import Link from "next/link";
import clsx from "clsx";
// TODO: Move the type to a separate file?
// eslint-disable-next-line import/no-cycle
import { HeaderAccordion } from "../HeaderAccordion/HeaderAccordion";

export type HeaderNavigationItem = {
  id: number;
  name: string;
  link: string;
  navItems: {
    id: number;
    name: string;
    link: string;
  }[];
};

export function HeaderNavigationListRedesign({
  className,
  navigationList,
}: {
  className?: string;
  navigationList: HeaderNavigationItem[];
}) {
  return (
    <nav
      className={clsx(
        `header-navigation-list-redesign`,
        className,
      )}
    >
      <ul className="header-navigation-list-redesign__list">
        {navigationList.map((el) => (el.navItems.length > 0 ? (
          <li
            className="header-navigation-list-redesign__list-item"
            key={el.id}
          >
            <HeaderAccordion
              className="header-navigation-list-redesign__accordion"
              navigationListItem={el}
            />
          </li>
        ) : (
          <li
            className="header-navigation-list-redesign__list-item"
            key={el.id}
          >
            <Link
              className="header-navigation-list-redesign__link"
              href={el.link}
            >
              {el.name}
            </Link>
          </li>
        )))}
      </ul>
    </nav>
  );
}
