import { useEffect, useRef } from 'react';

function HeroBlock({
  title,
  gradientTitle,
  description,
  Button,
}: {
  title: string,
  gradientTitle: string,
  description: string,
  Button: JSX.Element;
}) {
  // const ref = useRef<HTMLElement | null>(null);

  // useEffect(() => {
  //   const dfasf = ref.current?.getBoundingClientRect().height;

  //   const sdfs = window.innerHeight;

  //   console.log('height-screen', sdfs);

  //   console.log('heigh', dfasf);
  //   console.log('heigh / 2', dfasf && dfasf / 2);
  //   console.log('heigh / 2', dfasf && dfasf / 2);
  // }, [ref]);

  return (
    <section className="hero-block">
      <div className="container hero-block__wrapper">
        <div className="hero-block__inner">
          <h1 className="title-type-1">
            {title}
            <span className="hero-block__gradient-title">{gradientTitle}</span>
          </h1>
          <div className="title-type-4 hero-block__description">{description}</div>

          {Button}

        </div>
        <div className="hero-block__video">

          <video poster="/images/tourmaline-core-poster.webp" src="/images/video.mp4" autoPlay loop playsInline muted>
            <track kind="captions" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default HeroBlock;
