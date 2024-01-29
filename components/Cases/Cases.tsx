import { useTranslation } from 'next-i18next';
import CasesCard from '../CasesCard/CasesCard';
import IconCamera from '../../icons/icon-camera.svg';
import IconPeople from '../../icons/icon-people.svg';
import IconMonitor from '../../icons/icon-monitor.svg';
import IconChart from '../../icons/icon-chart.svg';
import IconHeart from '../../icons/icon-heart.svg';
import IconAdvertisement from '../../icons/icon-advertisement.svg';
import IconIceCream from '../../icons/icon-ice-cream.svg';

const icons = {
  camera: <IconCamera />,
  people: <IconPeople />,
  monitor: <IconMonitor />,
  chart: <IconChart />,
  heart: <IconHeart />,
  advertisement: <IconAdvertisement />,
  iceCream: <IconIceCream />,
};

type CasesList = {
  title: string;
  description: string;
  icon: keyof typeof icons;
  link: string;
}[];

export default function Cases() {
  const { t } = useTranslation('cases');

  const casesList: CasesList = t('list', { returnObjects: true });

  return (
    <section className="cases">
      <div className="container cases__wrapper">
        <div className="cases__inner">
          <h3 className="title-technology-type-1 cases__title">{t('title')}</h3>
          {casesList.map((item) => (
            <CasesCard
              title={item.title}
              description={item.description}
              icon={icons[item.icon]}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
