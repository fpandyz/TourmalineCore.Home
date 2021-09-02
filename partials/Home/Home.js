import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import TeamMember from '../../components/TeamMember/TeamMember';
import CharacteristicsList from '../../components/Characteristics/CharacteristicsList';
import getTeamMembers from './teamMembers';
import TransTemplator from '../../components/TransTemplator/TransTemplator';

import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';

export default function Home() {
  const [teamMemberIndex, setTeamMemberIndex] = useState(0);

  const { t } = useTranslation('home', { useSuspense: false });
  const { t: tTeam } = useTranslation('team', { useSuspense: false });

  const {
    width,
  } = useWindowDimensions();

  const isDesktop = width >= 1024;

  const teamMembers = getTeamMembers(tTeam);

  const teamMember = teamMembers[teamMemberIndex];

  return (
    <div className="tourmaline">
      <div className="tourmaline__container">
        <div className="tourmaline__info">
          <div className="tourmaline__about">
            <h2 className="tourmaline__about-title">{t('CompanyandTeam')}</h2>
            <p>
              <TransTemplator t={t}>{t('AboutUs')}</TransTemplator>
            </p>
            <p>
              <TransTemplator t={t}>{t('AboutTeam')}</TransTemplator>
            </p>
            <p>
              <TransTemplator t={t}>{t('AboutArticlesBeforeLink')}</TransTemplator>
              {' '}
              <Link href="/articles">
                <a className="tourmaline-link blue-text">
                  {t('ArticlesLink')}
                </a>
              </Link>
              {' '}
              <TransTemplator t={t}>{t('AboutArticlesAfterLink')}</TransTemplator>
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
        </div>
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
