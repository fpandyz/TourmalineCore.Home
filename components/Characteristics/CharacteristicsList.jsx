import React from 'react';
import Characteristic from './Characteristic';

function CharacteristicsList(props) {
  const {
    strengthText,
    staminaText,
    manaText,
    hidden,
    onClick = () => { },
  } = props;

  return (
    <ul
      onClick={onClick}
      role="presentation"
      className={`tourmaline__team-member-characteristics ${hidden ? 'visually-hidden' : ''}`}
    >
      <Characteristic
        imagePath="images/sword.svg"
        text={strengthText}
        alt="sword icon"
      />
      <Characteristic
        imagePath="images/heart.svg"
        text={staminaText}
        alt="heart icon"
      />
      <Characteristic
        imagePath="images/magic.svg"
        text={manaText}
        iconClassName="tourmaline__bulletpoint--magic"
        alt="magic icon"
      />
    </ul>
  );
}

export default CharacteristicsList;
