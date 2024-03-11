import clsx from 'clsx';
import IconCasesArrow from '../../icons/cases-arrow.svg';
import usePath from '../../common/hooks/usePath';

export default function CasesCard(
  {
    title,
    description,
    icon,
    link,
  }:{
    title: string;
    description: string;
    icon: JSX.Element;
    link: string
  },
) {
  const { slicePathname } = usePath();

  const linkIsEmpty = link === '';

  return (
    <a
      href={link}
      className={clsx(`cases-card cases-card--${slicePathname}`, {
        'cases-card--hover': !linkIsEmpty,
      })}
      onClick={(e) => (
        !linkIsEmpty
          ? e.stopPropagation()
          : e.preventDefault())}
    >
      <div className="cases-card__inner">
        <div className="cases-card__icon">{icon}</div>
        <h3 className="title-technology-type-2 cases-card__title">{title}</h3>
        <span className="cases-card__description">{description}</span>
      </div>
      {!linkIsEmpty && (
        <span className="cases-card__arrow">
          <IconCasesArrow />
        </span>
      ) }
    </a>
  );
}
