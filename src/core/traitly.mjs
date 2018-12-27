import prerequisite from './prerequisite.mjs';

const traitly = (...funs) => target => [prerequisite].concat(funs).reduce((obj, fun) => fun(obj), target);

export default traitly;
