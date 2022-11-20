export function getTvshowQueryAndTitle (pathname) {
  let query;
  let title;
  switch (pathname) {
  case '/tv-shows':
    query = 'popular';
    title = 'Popular TV Shows';
    break;
  case '/tv-shows?airing-today':
    query = 'airing_today';
    title = 'TV Shows Airing Today';
    break;
  case '/tv-shows?on-the-air':
    query = 'on_the_air';
    title = 'Currently Airing TV Shows';
    break;
  case '/tv-shows?top-rated':
    query = 'top_rated';
    title = 'Top Rated TV Shows';
    break;
  default:
    query = 'popular';
    title = 'Popular TV Shows';
  }
  return { query, title };
}

export default getTvshowQueryAndTitle;
