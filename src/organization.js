import axios from 'axios';
import Q from 'q';

export default function organization(): object {

  let url = `organizations`;

  function sendRequest(endpoint: string, cb: object): undefined {
    axios.get(url)
      .then((response: object): object => cb(null, response.data.RECDATA))
      .catch((err: object): object => cb(err));
  }

  return {
    all(options: object): undefined {
      const deferred = Q.defer();
      sendRequest(null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
  };
}
