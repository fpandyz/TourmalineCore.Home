import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Articles({
  articles,
}) {
  const { t } = useTranslation('articles');
  const router = useRouter();

  const articlesFilteredByLocale = articles.filter((article) => article.locale === router.locale);

  return (
    <div className="container articles">
      {articlesFilteredByLocale.length
        ? (
          <ul className="articles-list">
            {articlesFilteredByLocale.map((folder) => (
              <li key={folder.name} className="articles__item">
                <ArticleLink
                  articles={articles}
                  articleFolder={folder}
                  router={router}
                  locale={router.locale}
                />
              </li>
            ))}
          </ul>
        )
        : (
          <div className="articles-list-placeholder">{t('emptyPlaceholder')}</div>
        )}
    </div>
  );
}

function ArticleLink({
  articles,
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
      {availableLocales.map((locale) => {
        if (articles.find((article) => article.locale === locale)) {
          return (
            <Link key={locale} href={`/articles/${articleFilename}`} locale={locale}>
              <a className="articles__link">
                {locale.toUpperCase()}
              </a>
            </Link>
          );
        }

        return null;
      })}
      )
    </>
  );
}
