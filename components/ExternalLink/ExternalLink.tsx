import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

type ExternalLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

function ExternalLink({
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={clsx('external-link', className)}
      {...props}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
