import usePath from '../../../../common/hooks/usePath';
import { TStagesList } from '../../types';
import StagesAccordion from '../StagesAccordion/StagesAccordion';

export default function StagesList({
  list,
  clickedAccarion,
}:{
  list: TStagesList
  clickedAccarion: any
}) {
  const { slicePathname } = usePath();

  return (
    <ul className="stages-list">
      {list.map(({ title, description }, index) => (
        <StagesAccordion
          key={title}
          title={title}
          description={description}
          index={index}
          data-aos="fade-up"
          data-aos-delay={50 * (index + 1)}
          clickedAccarion={clickedAccarion}
        />
      ))}
    </ul>
  );
}
