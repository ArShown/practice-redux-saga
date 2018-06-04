import { pick, keys } from 'ramda';

export const pickFromModel = Model => pick(keys(new Model()));

export default pickFromModel;
