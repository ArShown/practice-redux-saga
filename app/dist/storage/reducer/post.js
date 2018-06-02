/* @flow */
import { reducerCreator } from '~/core/reducer';
import Post from '../model/post';

/* store key */
export const STORE_KEY = 'post';

/* action type */
export const APPEND_POST = 'APPEND_POST';
export const CLEAR_POST = 'CLEAR_POST';

/* default store */
const defaultStore: Array<Post> = [];

const reducer = reducerCreator(defaultStore, {
  [APPEND_POST]: (preState, payload) => [...preState, ...payload],
  [CLEAR_POST]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
