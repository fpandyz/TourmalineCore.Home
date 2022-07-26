import React from 'react';

function Characteristic({
  imagePath,
  text,
  iconClassName = '',
  alt,
}) {
  return (
    <li className="tourmaline__team-member-characteristic">
      <img src={imagePath} className={`tourmaline__bulletpoint ${iconClassName}`} alt={alt} />
      <span className="tourmaline__team-member-text">
        {}
        {text}
      </span>
    </li>
  );
}

export default Characteristic;
