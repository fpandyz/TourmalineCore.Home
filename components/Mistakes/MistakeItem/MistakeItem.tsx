import clsx from 'clsx';

import IconCursor from '../../../icons/icon-cursor.svg';

enum TagColor {
  victor = 'mistake-item__tag--green',
  oleg = 'mistake-item__tag--blue',
  andrey = 'mistake-item__tag--purple',
  yuliya = 'mistake-item__tag--pink',
}

enum CursorColor {
  victor = 'mistake-item__cursor--green',
  oleg = 'mistake-item__cursor--blue',
  andrey = 'mistake-item__cursor--purple',
  yuliya = 'mistake-item__cursor--pink',
}
function MistakeItem({
  title,
  mistakes,
}: {
  title: string;
  mistakes: {
    text: string;
    developer?: string;
    cursor?: boolean;
  }[]
}) {
  return (
    <div className="mistake-item">
      <div className="mistake-item__title">{title}</div>

      {mistakes.map(({ text, developer, cursor }) => (
        <div
          key={text}
          className="mistake-item__card"
        >
          <span className="mistake-item__text">{text}</span>
          {developer && (
            <span
              className={clsx(
                'mistake-item__tag',
                TagColor[developer.toLowerCase() as keyof typeof TagColor],
              )}
            >
              {developer}
            </span>
          )}
          {cursor && developer && (
            <div
              className={clsx(
                'mistake-item__cursor',
                CursorColor[developer.toLowerCase() as keyof typeof CursorColor],
              )}
            >
              {developer}

              <IconCursor className="mistake-item__cursor-arrow" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MistakeItem;
