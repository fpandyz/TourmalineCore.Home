import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const DynamicCommentsComponent = dynamic(() => import('../Comments/Comments'), { ssr: false });

export default function Article({
  markdown,
}) {
  const { t } = useTranslation('articles');

  return (
    <div className="container article-page">
      <Link href="/articles">
        <a className="backlink">{t('backlinkLabel')}</a>
      </Link>

      <article className="article-page__article">
        <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown>
      </article>

      <div className="article-page__comments">
        <DynamicCommentsComponent />
      </div>
    </div>
  );
}
