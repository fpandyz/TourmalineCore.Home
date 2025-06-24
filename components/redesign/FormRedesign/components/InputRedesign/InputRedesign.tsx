import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  isError?: boolean;
}

export function InputRedesign({
  id,
  label,
  description,
  isError = false,
  className,
  ...props
}: InputProps) {
  return (
    <div className={clsx(`input-redesign`, className, {
      'input-redesign--is-error': isError,
    })}
    >
      <div className="input-redesign__box">
        <input
          id={id}
          className="input-redesign__control"
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className="input-redesign__label visually-hidden"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
