/* @flow */
import { reducerCreator, pickFromSchema } from '~/core/reducer';
import Post from '../schema/post';
import { map } from 'ramda';

/* store key */
export const STORE_KEY = 'post';

/* action type */
export const APPEND_POST = 'APPEND_POST';
export const CLEAR_POST = 'CLEAR_POST';

/* default store */
const defaultStore: Array<Post> = [];

const reducer = reducerCreator(defaultStore, {
  [APPEND_POST]: (preState, payload: Array<Object>) => [
    ...preState,
    ...map(pickFromSchema(Post), payload)
  ],
  [CLEAR_POST]: () => defaultStore
});

export default {
  [STORE_KEY]: reducer
};
