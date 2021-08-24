import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { fetchMetadata } from './fetchHelpers/fetchMetadata';

export default function Articles({
  articles,
}) {
  const router = useRouter();

  return (
    <div className="container articles">
      <ul className="articles-list">
        {articles[router.locale].map((folder) => (
          <li key={folder.name} className="articles__item">
            <ArticleLink articleFolder={folder} router={router} locale={router.locale} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleLink({
  articleFolder = {},
  router,
}) {
  const files = articleFolder.children;
  const articleFilename = files.filter((file) => file.name !== 'metadata.json')[0].name;
  const availableLocales = router.locales.filter((locale) => locale !== router.locale);

  const [meta, setMeta] = useState({});

  useEffect(() => {
    async function loadMeta() {
      const metadata = await fetchMetadata(articleFilename, router.locale);

      setMeta(metadata);
    }

    loadMeta();
  }, [articleFilename, router.locale]);

  return (
    <>
      <Link href={`/articles/${articleFilename}`} locale={router.locale}>
        <a className="articles__link">
          {meta.title}
        </a>
      </Link>

      {' '}
      (
      {availableLocales.map((locale) => (
        <Link href={`/articles/${articleFilename}`} locale={locale}>
          <a className="articles__link">
            {locale.toUpperCase()}
          </a>
        </Link>
      ))}
      )
    </>
  );
}
