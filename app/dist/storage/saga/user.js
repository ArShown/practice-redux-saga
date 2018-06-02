/* @flow */
import { put } from 'redux-saga/effects';
import { emit } from '~/core/action/effects';
import { fetchFrom, pickFromModel } from '~/core/helpers';
import { SAVE_USER } from '~/storage/reducer/user';
import User from '~/storage/model/user';

/* request */
export const fetchList = () =>
  fetchFrom({ url: 'http://jsonplaceholder.typicode.com/users' });

/* response */
export const saveToStore = function*(res: Array<Object>): any {
  yield put(emit(SAVE_USER, pickFromModel(User)(res)));
};

/* error */
export const errorEmitter = function*(error: string): any {
  console.log(error);
};
