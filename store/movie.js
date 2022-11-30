import { camelCase, isEmpty } from 'lodash';
import MovieResource from '../api/moviedb/MovieResource';

const resource = new MovieResource();

export const state = () => ({
  home: {
    popular: {
      value: [],
      ready: false,
    },
    topRated: {
      value: [],
      ready: false,
    },
    upcoming: {
      value: [],
      ready: false,
    },
  },
  current: {
    movie: null,
    tvshow: null,
  },
  recommendation: {
    movies: null,
    tvshows: null,
  },
  movies: {
    value: [],
    ready: false,
  },
  tvShows: {
    value: [],
    ready: false,
  },
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
  'home/popular/value/results': ({ home: { popular: { value } } }) => value?.results || [],
  'home/popular/ready': ({ home: { popular: { ready } } }) => ready,
  'home/topRated/value/results': ({ home: { topRated: { value } } }) => value?.results || [],
  'home/topRated/ready': ({ home: { topRated: { ready } } }) => ready,
  'home/upcoming/value/results': ({ home: { upcoming: { value } } }) => value?.results || [],
  'home/upcoming/ready': ({ home: { upcoming: { ready } } }) => ready,
  movies: ({ movies: { value } }) => value,
  'movies/value/results': ({ movies: { value } }) => value?.results || [],
  'movies/ready': ({ movies: { ready } }) => ready,
  'movies/current': ({ current: { movie } }) => movie,
  'movies/recommendation': ({ recommendation: { movies } }) => movies?.results || [],
  'movies/recommendation/empty': ({ recommendation: { movies } }) => isEmpty(movies?.results),
  tvshows: ({ tvShows: { value } }) => value,
  'tvshows/value/results': ({ tvShows: { value } }) => value?.results || [],
  'tvshows/ready': ({ tvShows: { ready } }) => ready,
  'tvshows/current': ({ current: { tvshow } }) => tvshow,
  'tvshows/recommendation': ({ recommendation: { tvshows } }) => tvshows?.results || [],
  'tvshows/recommendation/empty': ({ recommendation: { tvshows } }) => isEmpty(tvshows?.results),
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
  'RECOMMENDATION/SET': (state, recommendation) => { state.recommendation = { ...state.recommendation, ...recommendation }; },
  'MOVIES/SET': (state, movies) => { state.movies = { ...state.movies, ...movies }; },
  'TVSHOWS/SET': (state, tvShows) => { state.tvShows = { ...state.tvShows, ...tvShows }; },
  'SEARCH/SET': (state, results) => { state.search = { ...state.search, ...results }; },
  'SEARCH/SUMMARY/SET': (state, summary) => { state.search.summary = { ...state.search.summary, ...summary }; },
};

export const actions = {
  'home/list': async ({ commit }, movieType) => {
    const query = '?language=en-US&page=1';
    const { data } = await resource.list(movieType, query);
    commit('HOME/SET', { [camelCase(movieType)]: { value: data, ready: true } });
  },
  'movies/current/get': async ({ commit }, id) => {
    const query = '?language=en-US';
    const { data } = await resource.get(id, query);
    commit('CURRENT/SET', { movie: data });
  },
  'movies/recommendation': async ({ commit }, id) => {
    const queries = { language: 'en-US', page: 1 };
    const { data } = await resource.recommendations(id, queries);
    commit('RECOMMENDATION/SET', { movies: data });
  },
  'movies/list': async ({ commit, getters }, { movieType, page = 1 }) => {
    const queries = { language: 'en-US', page };
    const { data } = await resource.list(movieType, queries);
    const movies = { ...getters.movies, ...data };
    const value = { ...movies, results: [ ...getters['movies/value/results'], ...(data?.results || []) ] };
    commit('MOVIES/SET', { value, ready: true });
  },
  'tvshows/current/get': async ({ commit }, id) => {
    const query = '?language=en-US';
    const { data } = await resource.tvshow().get(id, query);
    commit('CURRENT/SET', { tvshow: data });
  },
  'tvshows/recommendation': async ({ commit }, id) => {
    const queries = { language: 'en-US', page: 1 };
    const { data } = await resource.tvshow().recommendations(id, queries);
    commit('RECOMMENDATION/SET', { tvshows: data });
  },
  'tvshows/list': async ({ commit, getters }, { movieType, page = 1 }) => {
    const queries = { language: 'en-US', page };
    const { data } = await resource.tvshow().list(movieType, queries);
    const tvshows = { ...getters.tvshows, ...data };
    const value = { ...tvshows, results: [ ...getters['tvshows/value/results'], ...(data?.results || []) ] };
    commit('TVSHOWS/SET', { value, ready: true });
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
