import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

import IconDownArrow from '../../icons/icon-down-arrow.svg';

type SecondaryButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function SecondaryButton({
  className,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={clsx('button secondary-button', className)}
      {...props}
    >
      <IconDownArrow />
    </button>
  );
}

export default SecondaryButton;
