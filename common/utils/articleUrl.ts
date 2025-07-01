export function getArticleUrl(id: string, locale: string) {
  return `https://raw.githubusercontent.com/TourmalineCore/TourmalineCore.Articles/master/articles/${locale}/${id}`;
}
