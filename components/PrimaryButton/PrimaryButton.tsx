import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import { isChineseLanguage } from '../../common/utils/isChineseLanguage';

type PrimaryButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={clsx(`button primary-button`, className, {
        'primary-button--zh': isChineseLanguage(),
      })}
      {...props}
    >
      {children}
    </button>
  );
}
