import Link from 'next/link';
import router from 'next/router';

export type FooterNavigationList = {
  caption: string;
  links: {
    label: string;
    path: string;
    openInNewTab: boolean;
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
            <Link
              href={el.path}
              onClick={(e) => router.pathname === el.path && e.preventDefault()}
            >
              <a
                className="footerNavigationListRedesign__link"
                {...(el.openInNewTab && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {el.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
