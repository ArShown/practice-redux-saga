/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom, pickFromModel } from '~/core/helpers';
import { APPEND_POST, CLEAR_POST } from '~/storage/reducer/post';
import Post from '~/storage/model/post';

/* requests */
export const fetchListByUserId = (userId: number) => () =>
  fetchFrom({
    url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  });

export const fetchOneById = (postId: number) => () =>
  fetchFrom({ url: 'https://jsonplaceholder.typicode.com/posts/' + postId });

/* response */
export const saveToStore = function*(res: Array<Object>): any {
  yield put(emit(APPEND_POST, pickFromModel(Post)(res)));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};

/* clear */
export const clearStore = emit(CLEAR_POST);
