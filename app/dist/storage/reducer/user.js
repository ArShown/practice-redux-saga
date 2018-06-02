/* @flow */
import { reducerCreator } from '~/core/reducer';
import User from '../model/user';

/* store key */
export const STORE_KEY = 'user';

/* action type */
export const SAVE_USER = 'SAVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

/* default store */
const defaultStore: Array<User> = [];

const reducer = reducerCreator(defaultStore, {
  [SAVE_USER]: (preState, payload) => payload,
  [CLEAR_USER]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
