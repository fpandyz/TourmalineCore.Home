import clsx from "clsx";
import { ReactNode } from "react";

export function HeaderButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        `header-button`,
        className,
      )}
      type="button"
    >
      {children}
    </button>
  );
}
