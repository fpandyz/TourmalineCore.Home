import clsx from 'clsx';
import React from 'react';

enum TagColor {
  victor = 'mistake-item__tag--green',
  oleg = 'mistake-item__tag--blue',
  andrey = 'mistake-item__tag--purple',
  yuliya = 'mistake-item__tag--pink',
}
function MistakeItem({
  title,
  mistakes,
}: {
  title: string;
  mistakes: {
    text: string;
    developer?: string;
  }[]
}) {
  return (
    <div className="mistake-item">
      <div className="mistake-item__title">{title}</div>

      {mistakes.map(({ text, developer }) => (
        <div
          key={text}
          className="mistake-item__card"
        >
          <span>{text}</span>
          {developer && (
            <span
              className={clsx('mistake-item__tag', TagColor[developer.toLowerCase() as keyof typeof TagColor])}
            >
              {developer}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default MistakeItem;
