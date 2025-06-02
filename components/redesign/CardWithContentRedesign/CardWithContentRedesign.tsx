import { ReactNode } from 'react';
import clsx from 'clsx';
import { MarkdownText } from '../MarkdownText/MarkdownText';

export function CardWithContentRedesign({
  title,
  children,
  markdownText,
  className,
}: {
  className: string
  children: ReactNode;
  title?: string;
  markdownText?: string;
}) {
  return (
    <div className={clsx('card-with-content-redesign', className)}>
      {title && <h3 className="card-with-content-redesign__title">{title}</h3>}
      {children}
      {markdownText && (
        <MarkdownText
          className="card-with-content-redesign__markdown"
          isTargetBlank
        >
          {markdownText}
        </MarkdownText>
      )}
    </div>
  );
}
