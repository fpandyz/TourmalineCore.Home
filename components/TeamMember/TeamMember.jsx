import React, { useState } from 'react';

import CharacteristicsList from '../Characteristics/CharacteristicsList';

import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';

function TeamMember(props) {
  const {
    imagePath,
    name,
    strengthText,
    staminaText,
    manaText,
    onPrevious,
    onNext,
  } = props;

  const {
    width,
  } = useWindowDimensions();

  const isTablet = width >= 768;
  const isDesktop = width >= 1024;

  const [isFront, setIsFront] = useState(true);

  return (
    <div className="tourmaline__team-member-wrap">
      {
        !isTablet
        && (
          <div className="tourmaline__hint">
            {isFront ? 'tap to the hero to know more!' : 'tap to the info to go back!'}
          </div>
        )
      }

      {
        (isTablet || isFront)
        && (
          <>
            <button
              type="button"
              className="tourmaline__control-btn tourmaline__control-btn--left"
              onClick={onPrevious}
            >
              <img src="/images/arrow-left.svg" className="tourmaline__arrow-left" alt="arrow-left" />
            </button>
            <button
              type="button"
              className="tourmaline__control-btn tourmaline__control-btn--right"
              onClick={onNext}
            >
              <img src="/images/arrow-right.svg" className="tourmaline__arrow-right" alt="arrow-right" />
            </button>
          </>
        )
      }
      <div>
        <div
          className={`tourmaline__team-member ${isTablet || isFront ? '' : 'visually-hidden'}`}
          role="presentation"
          onClick={() => setIsFront(!isFront)}
        >
          <div className="tourmaline__team-member-img">
            <img src={imagePath} className="tourmaline__avatar" alt={`${name}'s avatar`} />
            <img src="/images/shadow.svg" className="tourmaline__avatar-shadow" alt="avatar-shadow" />
          </div>
        </div>

        <CharacteristicsList
          strengthText={strengthText}
          staminaText={staminaText}
          manaText={manaText}
          hidden={isDesktop || (isFront && !isTablet)}
          onClick={() => setIsFront(!isFront)}
        />
      </div>
    </div>
  );
}

export default TeamMember;
