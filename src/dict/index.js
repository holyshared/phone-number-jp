import length2 from './length2';
import length3 from './length3';
import length4 from './length4';
import length5 from './length5';

const mapFrom = (object) => {
  return {
//    object: object,
    contains(key) {
      const value = object[key];
      return !!value;
    },
    at(key) {
      return object[key];
    }
  };
};

export const len5 = mapFrom(length5);
export const len4 = mapFrom(length4);
export const len3 = mapFrom(length3);
export const len2 = mapFrom(length2);
