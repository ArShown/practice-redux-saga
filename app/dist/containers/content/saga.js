/* @flow */
import { put, call } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchTrip } from '~/core/action/effects';
import {
  fetchOneById as fetchPostById,
  saveToStore as saveToPost
} from '~/storage/saga/post';
import {
  fetchListByPostId as fetchCommentsByPostId,
  saveToStore as saveToComment
} from '~/storage/saga/comment';
import {
  fetchOneById as fetchAuthorById,
  saveToStore as saveToAuthor
} from '~/storage/saga/author';

const transferAuthorFormat = function*(res: Object): any {
  yield call(saveToAuthor, [res]);
};

/* 在 saveToPost 之前要做的事 */
const callback = function*(res: Object): any {
  /* 收到 post object，做關聯查詢 */
  yield put([
    fetchTrip(fetchCommentsByPostId(res.id), saveToComment),
    fetchTrip(fetchAuthorById(res.userId), transferAuthorFormat)
  ]);
  /* 資料儲存需為陣列格式 */
  yield call(saveToPost, [res]);
};

export default (id: number) => fetchTrip(fetchPostById(id), callback);
