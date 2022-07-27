import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import IconDownArrow from '../../icons/icon-down-arrow.svg';
import Button from '../Button/Button';

type SecondaryButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function SecondaryButton({
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <div className="secondary-button body-type-2">
      {children}
      <Button className="secondary-button__button" {...props}>
        <IconDownArrow />
      </Button>
    </div>
  );
}

export default SecondaryButton;
