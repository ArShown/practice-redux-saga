/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom } from '~/core/helpers';
import { is } from 'ramda';
import { SAVE_AUTHOR, CLEAR_AUTHOR } from '~/storage/reducer/author';

/* request */
export const fetchList = () =>
  fetchFrom({ url: 'https://jsonplaceholder.typicode.com/users' });

export const fetchOneById = (userId: number) => () =>
  fetchFrom({ url: 'https://jsonplaceholder.typicode.com/users/' + userId });

/* response */
export const saveToStore = function*(res: Array<Object> | Object): any {
  yield put(emit(SAVE_AUTHOR, is(Array, res) ? res : [res]));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};

/* clear */
export const clearStore = emit(CLEAR_AUTHOR);
