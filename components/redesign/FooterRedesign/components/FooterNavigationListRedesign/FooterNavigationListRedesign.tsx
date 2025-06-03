import Link from 'next/link';

export type FooterNavigationList = {
  caption: string,
  links: {
    label: string,
    path: string,
  }[],
};

export function FooterNavigationListRedesign({
  caption,
  links,
}: FooterNavigationList) {
  return (
    <div className="footerNavigationListRedesign">
      <span className="footerNavigationListRedesign__caption">{caption}</span>
      <ul className="footerNavigationListRedesign__list">
        {links?.map((el) => (
          <li key={el.label}>
            <Link href={el.path}>
              <a className="footerNavigationListRedesign__link">{el.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
