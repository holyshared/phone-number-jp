# phone-number-jp

[![npm version](https://badge.fury.io/js/phone-number-jp.svg)](https://badge.fury.io/js/phone-number-jp)
[![Build Status](https://travis-ci.org/holyshared/phone-number-jp.svg?branch=master)](https://travis-ci.org/holyshared/phone-number-jp)
[![codecov](https://codecov.io/gh/holyshared/phone-number-jp/branch/master/graph/badge.svg)](https://codecov.io/gh/holyshared/phone-number-jp)
[![dependencies Status](https://david-dm.org/holyshared/phone-number-jp/status.svg)](https://david-dm.org/holyshared/phone-number-jp)

## Installation

	npm install phone-number-jp

## Basic usage

You can split the phone number.

```js
import splitter from 'phone-number-jp';

const results = splitter.split('0768223333');

console.log(results[0]); // 0768 
console.log(results[1]); // 22
console.log(results[2]); // 3333
```

You can format the phone number.

```js
import splitter from 'phone-number-jp';

const result = splitter.format('0768223333');

console.log(result); // 0768-22-3333
```

## Run the test

	npm install
	npm run instrument
	npm test
