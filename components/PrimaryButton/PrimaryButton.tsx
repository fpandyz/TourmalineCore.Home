import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import useIsChineseLanguage from '../../common/hooks/useIsChineseLanguage';

type PrimaryButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={clsx('button primary-button', className, {
        'primary-button--zh': useIsChineseLanguage(),
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
