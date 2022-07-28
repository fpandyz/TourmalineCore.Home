import clsx from 'clsx';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string;
  label: string;
  description?: string;
  isError?: boolean;
}

function Textarea({
  label, description, isError = false, className, ...props
}: TextareaProps): JSX.Element {
  return (
    <div className={clsx('title-type-4', 'textarea', className, {
      'input--is-error': isError,
    })}
    >
      <div className="textarea__box">
        <textarea className="textarea__control" placeholder=" " {...props} />
        <label className="textarea__label">{label}</label>
      </div>
      {description && <div className="textarea__description">{description}</div>}
    </div>
  );
}

export default Textarea;
