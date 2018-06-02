import { toUpper } from 'ramda';

export const fetchFrom = opts => {
  const { method = 'get', url, body = null } = opts;

  const upperMethod = toUpper(method);

  return fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    mode: 'cors',
    credentials: 'include',
    method: upperMethod,
    body: upperMethod === 'GET' || upperMethod === 'HEAD' ? null : body
  });
};

export default fetchFrom;
