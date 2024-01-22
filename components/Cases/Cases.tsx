import CasesCard from '../CasesCard/CasesCard';
import IconCamera from '../../icons/icon-camera.svg';
import IconPeople from '../../icons/icon-people.svg';
import IconMonitor from '../../icons/icon-monitor.svg';
import IconChart from '../../icons/icon-chart.svg';
import IconHeart from '../../icons/icon-heart.svg';
import IconAdvertisement from '../../icons/icon-advertisement.svg';
import IconIceCream from '../../icons/icon-ice-cream.svg';

const CASES_TITLE = 'Некоторые наши проекты';

// TODO add links to projects
const CASES_LIST = [
  {
    title: 'Tourmanique',
    description: 'Cервис определения уникальности фотографий',
    icon: <IconCamera />,
  },
  {
    title: 'Sine and Clever',
    description: 'Cистема управления персоналом и расчета бонусов сотрудников',
    icon: <IconPeople />,
  },
  {
    title: 'Real Estate',
    description: 'Сервис для работы с объявлениями и их выгрузки на сайты недвижимости',
    icon: <IconMonitor />,
  },
  {
    title: 'Trade Hack',
    description: 'Сервис сбора аналитики  по товарам на площадке маркетплейса Wildberries',
    icon: <IconChart />,
  },
  {
    title: 'Fair Action',
    description: 'Сайт для австралийской благотворительной организации',
    icon: <IconHeart />,
  },
  {
    title: 'Inner Circle',
    description: 'Сервис для работы с объявлениями и их выгрузки  на сайты недвижимости',
    icon: <IconAdvertisement />,
  },
  {
    title: 'Best By',
    description: 'Сервис для отслеживания срока годности продукции',
    icon: <IconIceCream />,
  },
];

export default function Cases() {
  return (
    <div className="container cases__wrapper">
      <div className="cases__inner">
        <h3 className="title-technology cases__title">{CASES_TITLE}</h3>
        {CASES_LIST.map((item) => (
          <CasesCard
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
