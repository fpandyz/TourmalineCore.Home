import Link from "next/link";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { HeaderRedesignProps } from "../../../../../common/types";
import { HeaderNavigationList } from "../HeaderNavigationList/HeaderNavigationList";

export function MobileMenu({
  navigationLists,
  buttonLabel,
  email,
  socialLinks,
  // setIsModalOpen,
}: {
  navigationLists: HeaderRedesignProps["navigationLists"];
  buttonLabel: HeaderRedesignProps["button"]["label"];
  email: HeaderRedesignProps["email"];
  socialLinks: HeaderRedesignProps["socialLinks"];
  // setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      className="mobile-menu container-redesign"
      data-testid="mobile-menu"
    >
      <HeaderNavigationList
        className="mobile-menu__nav"
        navigationLists={navigationLists}
      />

      <HeaderButton
        className="mobile-menu__button"
        // ToDo: uncomment after editing the form
        // onClick={setIsModalOpen}
      >
        {buttonLabel}
      </HeaderButton>

      <div className="mobile-menu__contact">
        <span className="mobile-menu__caption">{email.caption}</span>
        <Link
          className="mobile-menu__email"
          href={`mailto:${email.address}`}
        >
          {email.address}
        </Link>
      </div>
      <nav className="mobile-menu__nav">
        <ul className="mobile-menu__list">
          {socialLinks.map(({
            id,
            name,
            link,
          }) => (
            <li
              key={id}
              className="mobile-menu__list-item"
            >
              <Link
                className="mobile-menu__link"
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
