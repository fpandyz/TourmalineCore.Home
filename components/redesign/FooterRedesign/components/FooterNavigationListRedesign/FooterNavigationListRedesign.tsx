import Link from "next/link";
import { FooterNavigationList } from "../../FooterRedesign";

export function FooterNavigationListRedesign({
  caption,
  links,
}: FooterNavigationList) {
  return (
    <div className="footerNavigationListRedesign">
      <span className="footerNavigationListRedesign__caption">{caption}</span>
      <ul className="footerNavigationListRedesign__list">
        {links?.map((el, index) => (
          <li key={index}>
            <Link href={el.path}>
              <a className="footerNavigationListRedesign__link">{el.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}