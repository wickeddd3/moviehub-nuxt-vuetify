import axios from 'axios';
import { apiDomain, apiKey } from '../.env';

export default class ResourceClient {
  constructor ({ baseUrl = '', config = {} }) {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };
    const configuration = { ...config, baseURL: apiDomain, headers };
    this.$http = axios.create(configuration);
    this._baseUrl = baseUrl;
    this._defaultConfig = config;
  }

  get (config = {}) {
    return this._request({ method: 'get', ...config });
  }

  put (data, config = {}) {
    return this._request({ method: 'put', data, ...config });
  }

  post (data, config = {}) {
    return this._request({ method: 'post', data, ...config });
  }

  delete (config = {}) {
    return this._request({ method: 'delete', ...config });
  }

  patch (data, config = {}) {
    return this._request({ method: 'patch', data, ...config });
  }

  _request (config = {}) {
    return this.$http({
      url: this._baseUrl,
      ...this._defaultConfig,
      ...config,
    });
  }
}
