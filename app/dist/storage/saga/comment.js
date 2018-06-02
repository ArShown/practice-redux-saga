/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom, pickFromModel } from '~/core/helpers';
import { SAVE_COMMENT } from '~/storage/reducer/comment';
import Comment from '~/storage/model/comment';

/* requests */
export const fetchListByPostId = (postId: string) =>
  fetchFrom({
    url: 'http://jsonplaceholder.typicode.com/comments?postId=' + postId
  });

/* response */
export const saveToStore = function*(res: Array<Object>): any {
  yield put(emit(SAVE_COMMENT, pickFromModel(Comment)(res)));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};
