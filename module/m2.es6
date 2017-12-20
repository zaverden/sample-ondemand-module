import _ from 'lodash';
import m1 from './m1.es6';

async function q(w) { await w; }

export function m2 (msg) {
  m1(msg);
  _.each(['m2', msg], m => console.log(m));
}
