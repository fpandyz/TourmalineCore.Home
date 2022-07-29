import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import IconDownArrow from '../../icons/icon-down-arrow.svg';
import Button from '../Button/Button';

type SecondaryButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function SecondaryButton({
  ...props
}: SecondaryButtonProps) {
  return (
    <Button className="secondary-button" {...props}>
      <IconDownArrow />
    </Button>
  );
}

export default SecondaryButton;
