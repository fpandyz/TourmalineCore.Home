import { DetailedHTMLProps, LinkHTMLAttributes } from 'react';
import clsx from 'clsx';

type ExternalLinkProps = DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

function ExternalLink({
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a {...props} className={clsx('external-link', className)}>{children}</a>
  );
}

export default ExternalLink;
