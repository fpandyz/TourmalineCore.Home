import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

import IconArrow from '../../icons/icon-arrow.svg';

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
      <IconArrow />
    </button>
  );
}

export default SecondaryButton;
