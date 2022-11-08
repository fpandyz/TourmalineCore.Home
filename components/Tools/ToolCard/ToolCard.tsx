import clsx from 'clsx';

import { useTranslation } from 'next-i18next';
import IconlLink from '../../../icons/icon-link.svg';
import IconlHourglass from '../../../icons/icon-hourglass.svg';
import isChineseLanguage from '../../../common/utils/isChineseLanguage';

enum DeveloperColors {
  green = 'tool-card__developer--green',
  blue = 'tool-card__developer--blue',
  red = 'tool-card__developer--red',
  'light-blue' = 'tool-card__developer--light-blue',
}

enum TagColors {
  front = 'tool-card__tag--front',
  back = 'tool-card__tag--back',
  feature = 'tool-card__tag--feature',
  camera = 'tool-card__tag--camera',
}

function ToolCard({
  isIconLink = false,
  text,
  developers,
  time,
  tags,
}:{
  isIconLink?: boolean;
  text: string;
  developers?: {
    online: boolean;
    color: string;
  }[];
  time?: string;
  tags?: string[] | undefined;
}) {
  const { t } = useTranslation('tools');

  return (
    <div className={clsx('tool-card', {
      'tool-card--zh': isChineseLanguage(),
    })}
    >
      <div className="tool-card__inner">
        <div className="tool-card__box">
          {isIconLink && (
            <div className="tool-card__icon-link">
              <IconlLink />
            </div>
          )}
          <div className="tool-card__text">{text}</div>
        </div>
        {developers && (
          <ul className="tool-card__developers">
            {developers.map((icon) => (
              <li
                key={icon.color}
                className={clsx('tool-card__developer', DeveloperColors[icon.color as unknown as keyof typeof DeveloperColors], {
                  'tool-card__developer--online': icon.online,
                })}
              />
            ))}
          </ul>
        )}
      </div>

      {time && (
        <div className="tool-card__time">
          <IconlHourglass />
          {time}
        </div>
      )}

      {tags && (
        <ul className="tool-card__tags">
          {tags.map((tag) => (
            <li
              key={tag}
              className={clsx('tool-card__tag', TagColors[tag as unknown as keyof typeof TagColors])}
            >
              {t(tag)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToolCard;
