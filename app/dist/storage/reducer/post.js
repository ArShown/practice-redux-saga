/* @flow */
import { reducerCreator } from '~/core/reducer';
import Post from '../model/post';

/* store key */
export const STORE_KEY = 'post';

/* action type */
export const SAVE_POST = 'SAVE_POST';
export const CLEAR_POST = 'CLEAR_POST';

/* default store */
const defaultStore: Array<Post> = [];

const reducer = reducerCreator(defaultStore, {
  [SAVE_POST]: (preState, payload) => payload,
  [CLEAR_POST]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
