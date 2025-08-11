import Link from "next/link";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { HeaderRedesignProps } from "../../../../../common/types";
import { HeaderNavigationList } from "../HeaderNavigationList/HeaderNavigationList";

export function HeaderPopup({
  navigationList,
  buttonLabel,
  email,
  socialLinks,
  // setIsModalOpen,
}: {
  navigationList: HeaderRedesignProps["navigationLists"];
  buttonLabel: HeaderRedesignProps["button"]["label"];
  email: HeaderRedesignProps["email"];
  socialLinks: HeaderRedesignProps["socialLinks"];
  // setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      className="header-popup container-redesign"
      data-testid="header-popup"
    >
      <HeaderNavigationList
        className="header-popup__nav"
        navigationList={navigationList}
      />

      <HeaderButton
        className="header-popup__button"
        // ToDo: uncomment after editing the form
        // onClick={setIsModalOpen}
      >
        {buttonLabel}
      </HeaderButton>

      <div className="header-popup__contact">
        <span className="header-popup__caption">{email.caption}</span>
        <Link
          className="header-popup__email"
          href={`mailto:${email.address}`}
        >
          {email.address}
        </Link>
      </div>
      <nav className="header-popup__nav">
        <ul className="header-popup__list">
          {socialLinks.map(({
            id,
            name,
            link,
          }) => (
            <li
              key={id}
              className="header-popup__list-item"
            >
              <Link
                className="header-popup__link"
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
