import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { fetchArticle } from '../fetchHelpers/fetchArticle';

const DynamicCommentsComponent = dynamic(() => import('../Comments/Comments'), { ssr: false });

export default function Article() {
  const router = useRouter();

  const {
    query: {
      article,
      lang,
    },
  } = router;

  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      setLoading(true);

      const response = await fetchArticle(article, lang);

      setMarkdown(response);
      setLoading(false);
    }

    loadArticle();
  }, [article]);

  return (
    <div className="container article-page">
      <article className="article-page__article">
        {loading
          ? 'Loading ...'
          : <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown>}
      </article>

      <div className="article-page__comments">
        <DynamicCommentsComponent />
      </div>
    </div>
  );
}
