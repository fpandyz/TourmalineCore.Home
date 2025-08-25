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
      className="mobile-menu-redesign container-redesign"
      data-testid="mobile-menu-redesign"
    >
      <HeaderNavigationList
        className="mobile-menu-redesign__nav"
        navigationLists={navigationLists}
      />

      <HeaderButton
        className="mobile-menu-redesign__button"
        // ToDo: uncomment after editing the form
        // onClick={setIsModalOpen}
      >
        {buttonLabel}
      </HeaderButton>

      <div className="mobile-menu-redesign__contact">
        <span className="mobile-menu-redesign__caption">{email.caption}</span>
        <Link
          className="mobile-menu-redesign__email"
          href={`mailto:${email.address}`}
        >
          {email.address}
        </Link>
      </div>
      <nav className="mobile-menu-redesign__nav">
        <ul className="mobile-menu-redesign__list">
          {socialLinks.map(({
            id,
            name,
            link,
          }) => (
            <li
              key={id}
              className="mobile-menu-redesign__list-item"
            >
              <Link
                className="mobile-menu-redesign__link"
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
