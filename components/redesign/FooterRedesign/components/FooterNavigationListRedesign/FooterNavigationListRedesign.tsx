import router from 'next/router';
import { AnimatedLink } from '../../../AnimatedLink/AnimatedLink';

export type FooterNavigationList = {
  caption: string;
  links: {
    label: string;
    path: string;
    openInNewTab: boolean;
  }[];
};

export function FooterNavigationListRedesign({
  caption,
  links,
}: FooterNavigationList) {
  return (
    <li className="footer-navigation-list-redesign">
      <span className="footer-navigation-list-redesign__caption">{caption}</span>
      <ul className="footer-navigation-list-redesign__list">
        {links.map((el) => (
          <li
            className="footer-navigation-list-redesign__item"
            key={el.label}
          >
            {/* TODO: Change when next will be upgrade to 12+ version */}
            <AnimatedLink
              className="footer-navigation-list-redesign__link"
              href={el.path}
              onClick={(e) => router.pathname === el.path && e.preventDefault()}
              {...(el.openInNewTab && {
                target: `_blank`,
                rel: `noopener noreferrer`,
              })}
            >
              {el.label}
            </AnimatedLink>
          </li>
        ))}
      </ul>
    </li>
  );
}
