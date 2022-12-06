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

  const [sortingValue, setSortingValue] = useState('All');

  const articlesFilteredByLocale = articles.filter((article) => article.locale === router.locale);
  const article = Array.from(new Set(articlesFilteredByLocale.flatMap((item) => item.metadata.categories)));
  console.log('articles flat', article);

  const dfs = ['All', ...article];
  console.log('sortingValue', sortingValue);

  return (
    <div className="container articles">
      {articlesFilteredByLocale.length
        ? (
          <div>
            {dfs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={(e) => console.log(e.currentTarget.textContent)}
              >
                {item}
              </button>
            ))}
            <ul
              className="articles__list"
              style={{
                display: 'flex',
              }}
            >
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
          </div>
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
  const availableLocales = router.locales.filter((locale) => locale !== router.locale);

  const image = getArticleUrl(articleFolder.name, articleFolder.locale);

  return (
    <>
      <Link href={`/articles/${articleFolder.metadata.slug}`} locale={router.locale}>
        <a className="articles-link" title={articleFolder.metadata.description}>
          <div className="articles-link__image">
            <Image
              src={articleFolder.metadata.previewImage ? `${image}/images/${articleFolder.metadata.previewImage}` : '/images/tourmaline-core-poster.webp'}
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
