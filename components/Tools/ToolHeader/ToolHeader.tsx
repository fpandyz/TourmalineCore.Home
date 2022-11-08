import clsx from 'clsx';

import IconlPlus from '../../../icons/icon-plus.svg';
import IconlDots from '../../../icons/icon-dots.svg';
import isChineseLanguage from '../../../common/utils/isChineseLanguage';

enum BorderColors {
  'TODO' = 'tool-header--to-do',
  'PROGRESS' = 'tool-header--progress',
  'REVIEW' = 'tool-header--review',
  'DEV' = 'tool-header--dev',
  'COMPLETE' = 'tool-header--complete',
}

function ToolHeader({
  headerColor,
  title,
  number,
}: {
  headerColor: string,
  title: string;
  number: number;
}) {
  return (
    <div
      className={clsx('tool-header', BorderColors[headerColor.toUpperCase() as keyof typeof BorderColors], {
        'tool-header--zh': isChineseLanguage(),
      })}
    >
      <div className="tool-header__inner">
        <div className="tool-header__title">{title}</div>
        <div className="tool-header__count">{number}</div>
      </div>
      <div className="tool-header__box-icon">
        <div className="tool-header__dots"><IconlDots /></div>
        <div className="tool-header__plus"><IconlPlus /></div>
      </div>
    </div>
  );
}

export default ToolHeader;
