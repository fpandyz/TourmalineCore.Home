import Link from 'next/link';
import { useEffect, useState } from 'react';

import { fetchMetadata } from './fetchHelpers/fetchMetadata';

export default function Articles({
  articles,
}) {
  return (
    <div className="container articles">
      {Object.keys(articles).map((locale) => (
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
  articleFolder = {},
  locale = '',
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
    <Link href={`/articles/${articleFilename}`} locale={locale}>
      <a className="articles__link">
        {meta.title}
      </a>
    </Link>
  );
}
