import React, { useState } from 'react';
import Link from 'next/link';

import TeamMember from '../../components/TeamMember/TeamMember';
import CharacteristicsList from '../../components/Characteristics/CharacteristicsList';
import teamMembers from './teamMembers';

import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';

export default function Home() {
  const [teamMemberIndex, setTeamMemberIndex] = useState(0);

  const {
    width,
  } = useWindowDimensions();

  const isDesktop = width >= 1024;

  const teamMember = teamMembers[teamMemberIndex];

  return (
    <div className="tourmaline">
      <div className="tourmaline__container">
        <header className="tourmaline__header">
          <img
            src="/images/just-logo.png"
            className="tourmaline__logo"
            width="28px"
            alt="Logo of Tourmaline Core"
          />
          <h1>Tourmaline Core&nbsp;- Spark&nbsp;to&nbsp;Develop</h1>
        </header>
        <main className="tourmaline__info">
          <div className="tourmaline__about">
            <h2 className="tourmaline__about-title">Company and Team</h2>
            <p>
              We
              {' '}
              <span className="blue-text">develop</span>
              {' '}
              customized enterprise information systems, public
              {' '}
              <span className="green-text">websites</span>
              , and applications.
              <span className="show-if-tablet">
                By the way, there’s a beautiful story behind the company’s name (you can try to find it out).
              </span>
            </p>
            <p>
              We are a team of
              {' '}
              <span className="red-text">experienced</span>
              {' '}
              and friendly perfectionists who make products convenient and our customers
              {' '}
              <span className="yellow-text">happy</span>
              .
            </p>
            <p>
              Also we write
              {' '}
              <Link href="/articles">
                <a className="tourmaline-link blue-text">
                  articles
                </a>
              </Link>
              {' '}
              about technologies we use.
            </p>
          </div>
          <TeamMember
            {...teamMember}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          <CharacteristicsList
            strengthText={teamMember.strengthText}
            staminaText={teamMember.staminaText}
            manaText={teamMember.manaText}
            hidden={!isDesktop}
          />
        </main>
        <footer className="tourmaline__footer" itemScope itemType="http://schema.org/Organization">
          <span className="tourmaline__copyright">
            <span className="tourmaline__years">
              2019-
              {new Date().getFullYear()}
              {' '}
            </span>
            <span className="tourmaline__name" itemProp="name">
              Tourmaline Core&nbsp;
            </span>
          </span>
          <a href="mailto:john@example.com" className="tourmaline__contacts" itemProp="email">contact@tourmalinecore.com</a>
        </footer>
      </div>
    </div>
  );

  function onPrevious() {
    if (teamMemberIndex === 0) {
      setTeamMemberIndex(teamMembers.length - 1);
    } else {
      setTeamMemberIndex(teamMemberIndex - 1);
    }
  }

  function onNext() {
    if (teamMemberIndex === teamMembers.length - 1) {
      setTeamMemberIndex(0);
    } else {
      setTeamMemberIndex(teamMemberIndex + 1);
    }
  }
}
