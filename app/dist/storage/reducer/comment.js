/* @flow */
import { reducerCreator } from '~/core/reducer';
import Comment from '../model/comment';

/* store key */
export const STORE_KEY = 'comment';

/* action type */
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const CLEAR_COMMENT = 'CLEAR_COMMENT';

/* default store */
const defaultStore: Array<Comment> = [];

const reducer = reducerCreator(defaultStore, {
  [SAVE_COMMENT]: (preState, payload) => payload,
  [CLEAR_COMMENT]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
