import { map, pick, keys } from 'ramda';

export const pickFromModel = Model => map(pick(keys(new Model())));

export default pickFromModel;
