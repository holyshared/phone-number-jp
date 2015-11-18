import { len5, len4, len3, len2 } from './dict';

export function splitter(phoneNumber) {
  const unkown = [ phoneNumber, '', '' ];

  for (let dict of [ len5, len4, len3, len2 ]) {
    const prefix = dict.prefixFrom(phoneNumber);

    if (dict.contains(prefix) === false) {
      continue;
    }

    const prefixLength = dict.prefixLength;
    const secondaryLength = dict.lengthOfSecondary(prefix);

    return [
      prefix,
      phoneNumber.substr(prefixLength, secondaryLength),
      phoneNumber.substr(prefixLength + secondaryLength)
    ];
  }

  return unkown;
};
