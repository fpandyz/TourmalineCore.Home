import { useRouter } from 'next/router';

// TODO uncomment when all pages are ready
export default function ServicesTechnologyCard(
  {
    title,
    description,
    // link,
  }:
  {
    title: string;
    description: string;
    // link: string
  },
) {
  const { pathname } = useRouter();

  return (
    // <Link href={link}>
    <div className={`services-technology-card services-technology-card--${pathname.slice(1)}`}>
      <div className="services-technology-card__inner">
        <h3 className="title-technology-type-2 services-technology-card__title">{title}</h3>
        <span className="services-technology-card__description">{description}</span>
      </div>
    </div>
    // </Link>
  );
}
