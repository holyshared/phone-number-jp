# tel-splitter-jp

[![Build Status](https://travis-ci.org/holyshared/tel-splitter-jp.svg?branch=master)](https://travis-ci.org/holyshared/tel-splitter-jp)
[![codecov.io](https://codecov.io/github/holyshared/tel-splitter-jp/coverage.svg?branch=master)](https://codecov.io/github/holyshared/tel-splitter-jp?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/564c17884e32b6001800036c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/564c17884e32b6001800036c)

## Installation

	npm install tel-splitter-jp

## Basic usage

You can split the phone number.

```js
import splitter from 'tel-splitter-jp';

const results = splitter.split('0768223333');

console.log(results[0]); // 0768 
console.log(results[1]); // 22
console.log(results[2]); // 3333
```

You can format the phone number.

```js
import splitter from 'tel-splitter-jp';

const result = splitter.format('0768223333');

console.log(result); // 0768-22-3333
```

## Run the test

	npm install
	npm run instrument
	npm test
