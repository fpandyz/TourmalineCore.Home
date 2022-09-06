import clsx from 'clsx';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string;
  label: string;
  description?: string;
  isError?: boolean;
}

function Textarea({
  id,
  label,
  description,
  isError = false,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className={clsx('title-type-4', 'textarea', className, {
      'textarea--is-error': isError,
    })}
    >
      <div className="textarea__box">
        <textarea
          id={id}
          className="textarea__control"
          placeholder=" "
          {...props}
        />
        <label htmlFor={id} className="textarea__label">{label}</label>
      </div>
      {description && <div className="textarea__description">{description}</div>}
    </div>
  );
}

export default Textarea;
