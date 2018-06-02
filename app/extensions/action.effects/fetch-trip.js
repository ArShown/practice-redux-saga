import { map } from 'ramda';

const tripCreator = (from, then, error) => ({
  type: 'SAGA_ASYNC',
  payload: {
    from,
    then,
    error
  }
});

const fetchTrip = (...args) => {
  if (typeof args[0] === 'object') {
    /* 忽略後面參數 */
    const { from, then, error } = args[0];
    return tripCreator(from, then, error);
  }

  /* 檢查傳入值為方法 */
  const [from, then, error] = map(v => {
    if (typeof v !== 'function')
      throw 'fetchTrip 第一個參數若不為物件，則所有傳入參數必須為方法';
    return v;
  }, args);
  return tripCreator(from, then, error);
};

export default fetchTrip;
