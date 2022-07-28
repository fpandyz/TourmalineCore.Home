import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  description?: string;
  isError?: boolean;
}

function Input({
  label, description, isError = false, className, ...props
}: InputProps): JSX.Element {
  return (
    <div className={clsx('title-type-4', 'input', className, {
      'input--is-error': isError,
    })}
    >
      <div className="input__box">
        <input placeholder=" " className="input__control" {...props} />
        <label className="input__label">{label}</label>
      </div>
      {description && <div className="input__description">{description}</div>}
    </div>
  );
}

export default Input;
