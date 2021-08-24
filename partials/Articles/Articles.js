import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Articles({
  articles,
}) {
  const router = useRouter();

  return (
    <div className="container articles">
      <ul className="articles-list">
        {articles.map((folder) => (
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

  return (
    <>
      <Link href={`/articles/${articleFilename}`} locale={router.locale}>
        <a className="articles__link">
          {articleFolder.metadata.title}
        </a>
      </Link>

      {' '}
      (
      {availableLocales.map((locale) => (
        <Link key={locale} href={`/articles/${articleFilename}`} locale={locale}>
          <a className="articles__link">
            {locale.toUpperCase()}
          </a>
        </Link>
      ))}
      )
    </>
  );
}
