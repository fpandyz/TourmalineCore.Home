import Image from 'next/image';

export function SignpostRedesign({
  title,
  subtitle,
  link,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  link?: string,
  imageUrl: string
}) {
  return (
    <div className="signpost-redesign">
      {link ? (
        <a
          className="signpost-redesign__link-wrapper"
          href={link}
        >
          {renderSignpostContent()}
        </a>
      )
        : renderSignpostContent()}
    </div>
  );

  function renderSignpostContent() {
    return (
      <>
        <div className="signpost-redesign__image-container">
          <Image
            src={imageUrl}
            layout="fill"
            alt=""
          />
        </div>
        <h4 className="signpost-redesign__title">
          {title}
        </h4>
        <span className="signpost-redesign__subtitle">
          {subtitle}
        </span>
      </>
    );
  }
}
