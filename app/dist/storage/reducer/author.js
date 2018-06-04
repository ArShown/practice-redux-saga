/* @flow */
import { reducerCreator, pickFromSchema } from '~/core/reducer';
import Author from '../schema/author';
import { map } from 'ramda';

/* store key */
export const STORE_KEY = 'author';

/* action type */
export const SAVE_AUTHOR = 'SAVE_AUTHOR';
export const CLEAR_AUTHOR = 'CLEAR_AUTHOR';

/* default store */
const defaultStore: Array<Author> = [];

const reducer = reducerCreator(defaultStore, {
  [SAVE_AUTHOR]: (preState, payload: Array<Object>) =>
    map(pickFromSchema(Author), payload),
  [CLEAR_AUTHOR]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
