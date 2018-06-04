/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom } from '~/core/helpers';
import { SAVE_COMMENT, CLEAR_COMMENT } from '~/storage/reducer/comment';

/* requests */
export const fetchListByPostId = (postId: number) => () =>
  fetchFrom({
    url: 'https://jsonplaceholder.typicode.com/comments?postId=' + postId
  });

/* response */
export const saveToStore = function*(res: Array<Object>): any {
  yield put(emit(SAVE_COMMENT, res));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};

/* clear */
export const clearStore = emit(CLEAR_COMMENT);
