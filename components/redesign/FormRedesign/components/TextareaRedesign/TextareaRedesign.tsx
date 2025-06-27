import clsx from 'clsx';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string;
  label: string;
  description?: string;
  isError?: boolean;
}

export function TextareaRedesign({
  id,
  label,
  description,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className={clsx(`textarea-redesign`, className)}>
      <div className="textarea-redesign__box">
        <textarea
          id={id}
          className="textarea-redesign__control"
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className="textarea-redesign__label visually-hidden"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
