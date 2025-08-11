import clsx from "clsx";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export function CheckBox({
  className,
  ...props
}: {
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      className={clsx(`checkbox`, className)}
      type="checkbox"
      {...props}
    />
  );
}
