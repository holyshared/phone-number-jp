import { len5, len4, len3, len2 } from './dict';

const prefixesDict = {
  5: len5,
  4: len4,
  3: len3,
  2: len2
};

export function splitter(phoneNumber) {
  let length = 5;

  for (let dict of [ len5, len4, len3, len2 ]) {
    const prefix = phoneNumber.substr(0, length);

    if (dict.contains(prefix) === false) {
      length--;
      continue;
    }

    const length2 = dict.at(prefix);

    return [
      prefix,
      phoneNumber.substr(length, length2),
      phoneNumber.substr(length + length2)
    ];
  }
};
