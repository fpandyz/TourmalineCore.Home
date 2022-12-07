import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getArticleUrl } from '../../common/utils/articleUrl';

export default function Articles({
  articles,
}) {
  const { t } = useTranslation('articles');
  const router = useRouter();
  const all = t('sortAll');

  const [sortingValue, setSortingValue] = useState(all);

  const articlesFilteredByLocale = articles.filter((article) => article.locale === router.locale)
    .sort((adsfs, ssssb) => (adsfs.metadata.datePublication < ssssb.metadata.datePublication ? 1 : -1));

  const article = Array.from(new Set(articlesFilteredByLocale.flatMap((item) => item.metadata.categories)));
  const sortElements = [all, ...article];

  const sortedArticles = getSort(articlesFilteredByLocale, sortingValue);

  return (
    <div className="container articles">
      {sortedArticles.length
        ? (
          <div>
            {sortElements.length > 2 && (
              <ul className="articles__sort-list">
                {sortElements.map((item) => (
                  <li key={item}>
                    <button
                      className={clsx('articles__sort-item', {
                        'articles__sort-item--active': item === sortingValue,
                      })}
                      type="button"
                      onClick={(event) => setSortingValue(event.currentTarget.textContent)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <ul className="articles__list">
              {sortedArticles.map((folder) => (
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
          </div>
        )
        : (
          <div className="articles-list-placeholder">{t('emptyPlaceholder')}</div>
        )}
    </div>
  );

  function getSort(arr, key) {
    if (key === all) {
      return arr;
    }

    return arr.filter((a) => a.metadata.categories.includes(key) === true);
  }
}

function ArticleLink({
  articles,
  articleFolder = {},
  router,
}) {
  const availableLocales = router.locales.filter((locale) => locale !== router.locale);

  const image = getArticleUrl(articleFolder.name, articleFolder.locale);

  return (
    <>
      <Link href={`/articles/${articleFolder.metadata.slug}`} locale={router.locale}>
        <a className="articles-link" title={articleFolder.metadata.description}>
          <div className="articles-link__image">
            <Image
              src={articleFolder.metadata.previewImage ? `${image}/images/${articleFolder.metadata.previewImage}` : '/images/article-preview.webp'}
              alt="preview photo"
              layout="fill"
            />

            <ul className="articles-link__categories">
              {articleFolder.metadata.categories.map((category) => (
                <li
                  key={category}
                  className="articles-link__category"
                >
                  {category}
                </li>
              ))}
            </ul>

          </div>

          <div className="articles-link__description">{articleFolder.metadata.description}</div>
          <div className="articles-link__info">
            <span>{articleFolder.metadata.author}</span>
            <span>{articleFolder.metadata.datePublication}</span>
          </div>
        </a>
      </Link>

      {/* {' '}
      (
      {availableLocales.map((locale) => {
        if (articles.find((article) => article.locale === locale)) {
          return (
            <Link key={locale} href={`/articles/${articleFolder.metadata.slug}`} locale={locale}>
              <a className="articles__link">
                {locale.toUpperCase()}
              </a>
            </Link>
          );
        }

        return null;
      })}
      ) */}
    </>
  );
}
