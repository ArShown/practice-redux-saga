/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom, pickFromModel } from '~/core/helpers';
import { SAVE_AUTHOR, CLEAR_AUTHOR } from '~/storage/reducer/author';
import Author from '~/storage/model/author';

/* request */
export const fetchList = () =>
  fetchFrom({ url: 'http://jsonplaceholder.typicode.com/users' });

export const fetchOneById = (userId: number) => () =>
  fetchFrom({ url: 'http://jsonplaceholder.typicode.com/users/' + userId });

/* response */
export const saveToStore = function*(res: Array<Object>): any {
  yield put(emit(SAVE_AUTHOR, pickFromModel(Author)(res)));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};

/* clear */
export const clearStore = emit(CLEAR_AUTHOR);
