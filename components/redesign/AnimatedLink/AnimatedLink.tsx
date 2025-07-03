import clsx from "clsx";
import { PropsWithChildren } from "react";

export function AnimatedLink({
  className,
  reverse,
  children,
  ...props
}: {
  reverse?: boolean;
  className?: string;
} & PropsWithChildren & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a
      className={clsx(`animated-link`, className, {
        'animated-link--reverse': reverse,
      })}
      {...props}
    >
      {children}
    </a>
  );
}
