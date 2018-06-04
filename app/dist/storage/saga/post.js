/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom } from '~/core/helpers';
import { is } from 'ramda';
import { APPEND_POST, CLEAR_POST } from '~/storage/reducer/post';

/* requests */
export const fetchListByUserId = (userId: number) => () =>
  fetchFrom({
    url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  });

export const fetchOneById = (postId: number) => () =>
  fetchFrom({ url: 'https://jsonplaceholder.typicode.com/posts/' + postId });

/* response */
export const saveToStore = function*(res: Array<Object>): any {
  yield put(emit(APPEND_POST, is(Array, res) ? res : [res]));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};

/* clear */
export const clearStore = emit(CLEAR_POST);
