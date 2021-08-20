import Link from 'next/link';
import { useEffect, useState } from 'react';

import { fetchArticlesList } from './fetchHelpers/fetchArticlesList';
import { fetchMetadata } from './fetchHelpers/fetchMetadata';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticlesList() {
      setLoading(true);

      const responseArticles = await fetchArticlesList();

      setArticles(responseArticles);
      setLoading(false);
    }

    loadArticlesList();
  }, []);

  return (
    <div className="container articles">
      {loading
        ? 'Loading ...'
        : Object.keys(articles).map((locale) => (
          <ul key={locale} className="articles-list">
            {articles[locale].map((folder) => (
              <li key={folder.name} className="articles__item">
                <ArticleLink articleFolder={folder} locale={locale} />
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

function ArticleLink({
  locale = '',
  articleFolder = {},
}) {
  const files = articleFolder.children;
  const articleFilename = files.filter((file) => file.name !== 'metadata.json')[0].name;

  const [meta, setMeta] = useState({});

  useEffect(() => {
    async function loadMeta() {
      const metadata = await fetchMetadata(articleFilename, locale);

      setMeta(metadata);
    }

    loadMeta();
  }, [articleFilename, locale]);

  return (
    <Link href={`/articles/${articleFilename}?lang=${locale}`}>
      <a className="articles__link">
        {meta.title}
      </a>
    </Link>
  );
}
