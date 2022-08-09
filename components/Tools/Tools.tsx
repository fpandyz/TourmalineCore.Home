import { useTranslation } from 'next-i18next';
import { dataTools } from './getTools';
import ToolCard from './ToolCard/ToolCard';
import ToolHeader from './ToolHeader/ToolHeader';

function Tools() {
  const { t } = useTranslation('tools');

  const tools = Object.values(dataTools);

  return (
    <section className="section tools">
      <h2 className="title-type-3">{t('title')}</h2>

      <div className="tools__subtitle">{t('subtitle')}</div>
      <div className="tools__list">
        {tools.map((tool) => (
          <div
            key={tool.localizationTitle}
            className="tools__item"
          >
            <ToolHeader
              key={tool.localizationTitle}
              title={t(`${tool.localizationTitle}.title`)}
              number={tool.tasks.length}
            />

            {tool.tasks.map((task, indexTasks) => {
              const dataLocalization: { text: string, time?: string }[] = t(`${tool.localizationTitle}.tasks`, { returnObjects: true });

              return (
                <ToolCard
                  key={`${indexTasks + 1}`}
                  isIconLink={task.iconLink}
                  developers={task.developers}
                  text={dataLocalization[indexTasks].text}
                  tags={task.tags}
                  time={dataLocalization[indexTasks].time}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="caption tools__caption">{t('caption')}</div>
    </section>
  );
}

export default Tools;
