/* @flow */
import { reducerCreator, pickFromModel } from '~/core/reducer';
import Comment from '../model/comment';
import { map } from 'ramda';

/* store key */
export const STORE_KEY = 'comment';

/* action type */
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const CLEAR_COMMENT = 'CLEAR_COMMENT';

/* default store */
const defaultStore: Array<Comment> = [];

const reducer = reducerCreator(defaultStore, {
  [SAVE_COMMENT]: (preState, payload: Array<Object>) =>
    map(pickFromModel(Comment), payload),
  [CLEAR_COMMENT]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
