import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { HeaderAccordion } from "../HeaderAccordion/HeaderAccordion";
import { HeaderRedesignProps } from "../../../../../common/types";

export function HeaderNavigationList({
  className,
  navigationList,
}: {
  className?: string;
  navigationList: HeaderRedesignProps["navigationLists"];
}) {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <nav
      className={clsx(
        `header-navigation-list`,
        className,
      )}
    >
      <ul className="header-navigation-list__list">
        {navigationList.map((el) => (el.navItems.length > 0 ? (
          <li
            className="header-navigation-list__list-item"
            key={el.id}
          >
            <HeaderAccordion
              className="header-navigation-list__accordion"
              navigationListItem={el}
              isOpen={openId === el.id}
              onToggle={handleToggle}
            />
          </li>
        ) : (
          <li
            className="header-navigation-list__list-item"
            key={el.id}
          >
            <Link
              className="header-navigation-list__link"
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
