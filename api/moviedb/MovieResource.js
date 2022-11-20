import ResourceClient from '../ResourceClient';
import TvShowResource from './TvShowResource';

export default class ContactResource extends ResourceClient {
  constructor () {
    super({ baseUrl: '/3' });
  }

  list (movieType, queries) {
    return super.get({ url: `${this._baseUrl}/movie/${movieType}`, params: { ...queries } });
  }

  get (id, query) {
    return super.get({ url: `${this._baseUrl}/movie/${id}`, params: { query } });
  }

  tvshow () {
    return new TvShowResource(this._baseUrl);
  }

  searchMulti (queries) {
    return super.get({ url: `${this._baseUrl}/search/multi`, params: { ...queries } });
  }

  search (mediaType, queries) {
    return super.get({ url: `${this._baseUrl}/search/${mediaType}`, params: { ...queries } });
  }
}
