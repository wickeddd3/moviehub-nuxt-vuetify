import ResourceClient from '../ResourceClient';

export default class ContactResource extends ResourceClient {
  constructor (parent) {
    super({ baseUrl: `${parent}/tv` });
  }

  list (movieType, queries) {
    return super.get({ url: `${this._baseUrl}/${movieType}`, params: { ...queries } });
  }

  get (id, query) {
    return super.get({ url: `${this._baseUrl}/${id}`, params: { query } });
  }
}
