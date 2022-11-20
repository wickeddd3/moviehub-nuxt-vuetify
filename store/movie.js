import { camelCase, isEmpty } from 'lodash';
import MovieResource from '../api/moviedb/MovieResource';

const resource = new MovieResource();

export const state = () => ({
  home: {
    popular: [],
    topRated: [],
    upcoming: [],
  },
  current: {
    movie: null,
    tvshow: null,
  },
  movies: [],
  tvShows: [],
  search: {
    input: null,
    multi: {},
    summary: {
      movie: null,
      tv: null,
      person: null,
      company: null,
      collection: null,
      keyword: null,
    },
    titles: [
      {
        title: 'Movies',
        mediaType: 'movie',
      },
      {
        title: 'TV Shows',
        mediaType: 'tv',
      },
      {
        title: 'People',
        mediaType: 'person',
      },
      {
        title: 'Companies',
        mediaType: 'company',
      },
      {
        title: 'Collections',
        mediaType: 'collection',
      },
      {
        title: 'Keywords',
        mediaType: 'keyword',
      },
    ],
  },
});

export const getters = {
  'home/popular': ({ home: { popular } }) => popular,
  'home/popular/results': ({ home: { popular: { results } } }) => results,
  'home/topRated': ({ home: { topRated } }) => topRated,
  'home/topRated/results': ({ home: { topRated: { results } } }) => results,
  'home/upcoming': ({ home: { upcoming } }) => upcoming,
  'home/upcoming/results': ({ home: { upcoming: { results } } }) => results,
  movies: ({ movies }) => movies,
  'movies/results': ({ movies: { results } }) => results || [],
  'movies/current': ({ current: { movie } }) => movie,
  tvshows: ({ tvShows }) => tvShows,
  'tvshows/results': ({ tvShows: { results } }) => results || [],
  'tvshows/current': ({ current: { tvshow } }) => tvshow,
  'search/input': ({ search: { input } }) => input,
  'search/titles': ({ search: { titles } }) => titles,
  'search/summary/movie/total/results': ({ search: { summary: { movie } } }) => movie?.total_results || 0,
  'search/summary/tv/total/results': ({ search: { summary: { tv } } }) => tv?.total_results || 0,
  'search/summary/person/total/results': ({ search: { summary: { person } } }) => person?.total_results || 0,
  'search/summary/company/total/results': ({ search: { summary: { company } } }) => company?.total_results || 0,
  'search/summary/collection/total/results': ({ search: { summary: { collection } } }) => collection?.total_results || 0,
  'search/summary/keyword/total/results': ({ search: { summary: { keyword } } }) => keyword?.total_results || 0,
  'search/multi': ({ search: { multi } }) => multi,
  'search/multi/type': ({ search: { multi: { type } } }) => type,
  'search/multi/results': ({ search: { multi: { results } } }) => results,
  'search/multi/results/empty': ({ search: { multi: { results } } }) => isEmpty(results),
  'search/multi/results/paginated': ({ search: { multi } }) => multi?.total_pages > 1,
  'search/multi/page': ({ search: { multi: { page } } }) => page,
  'search/multi/total/pages': ({ search: { multi } }) => multi?.total_pages || 0,
  'search/multi/total/results': ({ search: { multi } }) => multi?.total_results || 0,
};

export const mutations = {
  'HOME/SET': (state, movies) => { state.home = { ...state.home, ...movies }; },
  'CURRENT/SET': (state, current) => { state.current = { ...state.current, ...current }; },
  'MOVIES/SET': (state, movies) => { state.movies = movies; },
  'TVSHOWS/SET': (state, tvShows) => { state.tvShows = tvShows; },
  'SEARCH/SET': (state, results) => { state.search = { ...state.search, ...results }; },
  'SEARCH/SUMMARY/SET': (state, summary) => { state.search.summary = { ...state.search.summary, ...summary }; },
};

export const actions = {
  'home/list': async ({ commit }, movieType) => {
    const query = '?language=en-US&page=1';
    const { data } = await resource.list(movieType, query);
    commit('HOME/SET', { [camelCase(movieType)]: data });
  },
  'movies/current/get': async ({ commit }, id) => {
    const query = '?language=en-US';
    const { data } = await resource.get(id, query);
    commit('CURRENT/SET', { movie: data });
  },
  'movies/list': async ({ commit, getters }, { movieType, page = 1 }) => {
    const queries = { language: 'en-US', page };
    const { data } = await resource.list(movieType, queries);
    const movies = { ...getters.movies, ...data };
    const updated = { ...movies, results: [ ...getters['movies/results'], ...(data?.results || []) ] };
    commit('MOVIES/SET', updated);
  },
  'tvshows/current/get': async ({ commit }, id) => {
    const query = '?language=en-US';
    const { data } = await resource.tvshow().get(id, query);
    commit('CURRENT/SET', { tvshow: data });
  },
  'tvshows/list': async ({ commit, getters }, { movieType, page = 1 }) => {
    const queries = { language: 'en-US', page };
    const { data } = await resource.tvshow().list(movieType, queries);
    const tvshows = { ...getters.tvshows, ...data };
    const updated = { ...tvshows, results: [ ...getters['tvshows/results'], ...(data?.results || []) ] };
    commit('TVSHOWS/SET', updated);
  },
  'search/input': ({ commit }, input) => commit('SEARCH/SET', { input }),
  'search/multi': async ({ commit }, { query, page = 1 }) => {
    const queries = { query, language: 'en-US', page };
    const { data } = await resource.searchMulti(queries);
    commit('SEARCH/SET', { multi: { ...data, type: 'movie' } });
  },
  'search/summary': async ({ commit, getters }, { query, page = 1 }) => {
    const titles = [ ...getters['search/titles'] ];
    Promise.all([ titles.map(async item => {
      const queries = { query, language: 'en-US', page };
      const { data } = await resource.search(item.mediaType, queries);
      commit('SEARCH/SUMMARY/SET', { [item.mediaType]: data });
    }) ]);
  },
  'search/by/media': async ({ commit }, { mediaType, query, page = 1 }) => {
    const queries = { query, language: 'en-US', page };
    const { data } = await resource.search(mediaType, queries);
    commit('SEARCH/SET', { multi: { ...data, type: mediaType } });
  },
};
