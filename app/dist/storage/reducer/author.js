/* @flow */
import { reducerCreator } from '~/core/reducer';
import Author from '../model/author';

/* store key */
export const STORE_KEY = 'author';

/* action type */
export const SAVE_AUTHOR = 'SAVE_AUTHOR';
export const CLEAR_AUTHOR = 'CLEAR_AUTHOR';

/* default store */
const defaultStore: Array<Author> = [];

const reducer = reducerCreator(defaultStore, {
  [SAVE_AUTHOR]: (preState, payload) => payload,
  [CLEAR_AUTHOR]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
