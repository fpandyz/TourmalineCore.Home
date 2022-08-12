import clsx from 'clsx';

import IconlPlus from '../../../icons/icon-plus.svg';
import IconlDots from '../../../icons/icon-dots.svg';

enum BorderColors {
  'TO DO' = 'tool-header--to-do',
  'IN PROGRESS' = 'tool-header--progress',
  'REVIEW' = 'tool-header--review',
  'ON DEV' = 'tool-header--dev',
  'COMPLETE' = 'tool-header--complete',
}

function ToolHeader({
  title,
  number,
}: {
  title: string;
  number: number;
}) {
  return (
    <div
      className={clsx('tool-header', BorderColors[title.toUpperCase() as keyof typeof BorderColors])}
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
