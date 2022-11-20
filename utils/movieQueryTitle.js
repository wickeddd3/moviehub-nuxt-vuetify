export function getMovieQueryAndTitle (pathname) {
  let query;
  let title;
  switch (pathname) {
  case '/movies':
    query = 'popular';
    title = 'Popular Movies';
    break;
  case '/movies?now-playing':
    query = 'now_playing';
    title = 'Now Playing Movies';
    break;
  case '/movies?upcoming':
    query = 'upcoming';
    title = 'Upcoming Movies';
    break;
  case '/movies?top-rated':
    query = 'top_rated';
    title = 'Top Rated Movies';
    break;
  default:
    query = 'popular';
    title = 'Popular Movies';
  }
  return { query, title };
}

export default getMovieQueryAndTitle;
