/**
 * Example:
 *
 * https://gist.github.com/kennyj/4966002
 * http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/number_shitei.html のデータを利用
 */

import length2 from './length2';
import length3 from './length3';
import length4 from './length4';
import length5 from './length5';

class Dict {
  constructor(length, object) {
    this._length = length;
    this._object = object;
  }
  contains(key) {
    const value = this._object[key];
    return !!value;
  }
  lengthOfSecondary(key) {
    return this._object[key];
  }
  prefixFrom(phoneNumber) {
    return phoneNumber.substr(0, this._length);
  }
  get prefixLength() {
    return this._length;
  }
  get length() {
    return Object.keys(this._object).length;
  }
}

export const len5 = new Dict(5, length5);
export const len4 = new Dict(4, length4);
export const len3 = new Dict(3, length3);
export const len2 = new Dict(2, length2);
