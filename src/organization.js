import axios from 'axios';
import Q from 'q';

export default function organization(): object {

  function sendRequest(endpoint: string, options: object = {}, cb: object): undefined {
    let url = `organizations${(endpoint ? `/${endpoint}?` : '?')}`;
    if (options) {
      if (options.query) url = `${url}query=${options.sort}&`;
      if (options.limit) url = `${url}limit=${options.sort}&`;
      if (options.offset) url = `${url}offset=${options.sort}`;
    }
    axios.get(url)
      .then((response: object): object => cb(null, response.data))
      .catch((err: object): object => cb(err));
  }

  return {
    all(options: object = {}): undefined {
      const deferred = Q.defer();
      sendRequest(null, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    organization(organizationID: string): undefined {
      const deferred = Q.defer();
      sendRequest(organizationID, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
  };
}
