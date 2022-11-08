import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

import IconArrow from '../../icons/icon-arrow.svg';
import isChineseLanguage from '../../common/utils/isChineseLanguage';

interface SecondaryButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
}

function SecondaryButton({
  text,
  className,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={clsx('secondary-button', className, {
        'secondary-button--zh': isChineseLanguage(),
      })}
      {...props}
    >
      {
        text && (
          <span className="secondary-button__text">{text}</span>
        )
      }
      <div className="button secondary-button__icon">
        <IconArrow />
      </div>
    </button>
  );
}

export default SecondaryButton;
