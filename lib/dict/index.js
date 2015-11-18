'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Example:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * https://gist.github.com/kennyj/4966002
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/number_shitei.html のデータを利用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.len2 = exports.len3 = exports.len4 = exports.len5 = undefined;

var _length = require('./length2');

var _length2 = _interopRequireDefault(_length);

var _length3 = require('./length3');

var _length4 = _interopRequireDefault(_length3);

var _length5 = require('./length4');

var _length6 = _interopRequireDefault(_length5);

var _length7 = require('./length5');

var _length8 = _interopRequireDefault(_length7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dict = (function () {
  function Dict(length, object) {
    _classCallCheck(this, Dict);

    this._length = length;
    this._object = object;
  }

  _createClass(Dict, [{
    key: 'contains',
    value: function contains(key) {
      var value = this._object[key];
      return !!value;
    }
  }, {
    key: 'lengthOfSecondary',
    value: function lengthOfSecondary(key) {
      return this._object[key];
    }
  }, {
    key: 'prefixFrom',
    value: function prefixFrom(phoneNumber) {
      return phoneNumber.substr(0, this._length);
    }
  }, {
    key: 'prefixLength',
    get: function get() {
      return this._length;
    }
  }, {
    key: 'length',
    get: function get() {
      return Object.keys(this._object).length;
    }
  }]);

  return Dict;
})();

var len5 = exports.len5 = new Dict(5, _length8.default);
var len4 = exports.len4 = new Dict(4, _length6.default);
var len3 = exports.len3 = new Dict(3, _length4.default);
var len2 = exports.len2 = new Dict(2, _length2.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZTSxJQUFJO0FBQ1IsV0FESSxJQUFJLENBQ0ksTUFBTSxFQUFFLE1BQU0sRUFBRTswQkFEeEIsSUFBSTs7QUFFTixRQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixRQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztHQUN2Qjs7ZUFKRyxJQUFJOzs2QkFLQyxHQUFHLEVBQUU7QUFDWixVQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUNoQjs7O3NDQUNpQixHQUFHLEVBQUU7QUFDckIsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7K0JBQ1UsV0FBVyxFQUFFO0FBQ3RCLGFBQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVDOzs7d0JBQ2tCO0FBQ2pCLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7O3dCQUNZO0FBQ1gsYUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDekM7OztTQXBCRyxJQUFJOzs7QUF1QkgsSUFBTSxJQUFJLFdBQUosSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsbUJBQVUsQ0FBQztBQUNsQyxJQUFNLElBQUksV0FBSixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxtQkFBVSxDQUFDO0FBQ2xDLElBQU0sSUFBSSxXQUFKLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLG1CQUFVLENBQUM7QUFDbEMsSUFBTSxJQUFJLFdBQUosSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsbUJBQVUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXhhbXBsZTpcbiAqXG4gKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9rZW5ueWovNDk2NjAwMlxuICogaHR0cDovL3d3dy5zb3VtdS5nby5qcC9tYWluX3Nvc2lraS9qb2hvX3RzdXNpbi90b3AvdGVsX251bWJlci9udW1iZXJfc2hpdGVpLmh0bWwg44Gu44OH44O844K/44KS5Yip55SoXG4gKi9cblxuaW1wb3J0IGxlbmd0aDIgZnJvbSAnLi9sZW5ndGgyJztcbmltcG9ydCBsZW5ndGgzIGZyb20gJy4vbGVuZ3RoMyc7XG5pbXBvcnQgbGVuZ3RoNCBmcm9tICcuL2xlbmd0aDQnO1xuaW1wb3J0IGxlbmd0aDUgZnJvbSAnLi9sZW5ndGg1JztcblxuY2xhc3MgRGljdCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgb2JqZWN0KSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcbiAgfVxuICBjb250YWlucyhrZXkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX29iamVjdFtrZXldO1xuICAgIHJldHVybiAhIXZhbHVlO1xuICB9XG4gIGxlbmd0aE9mU2Vjb25kYXJ5KGtleSkge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3Rba2V5XTtcbiAgfVxuICBwcmVmaXhGcm9tKHBob25lTnVtYmVyKSB7XG4gICAgcmV0dXJuIHBob25lTnVtYmVyLnN1YnN0cigwLCB0aGlzLl9sZW5ndGgpO1xuICB9XG4gIGdldCBwcmVmaXhMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9vYmplY3QpLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbGVuNSA9IG5ldyBEaWN0KDUsIGxlbmd0aDUpO1xuZXhwb3J0IGNvbnN0IGxlbjQgPSBuZXcgRGljdCg0LCBsZW5ndGg0KTtcbmV4cG9ydCBjb25zdCBsZW4zID0gbmV3IERpY3QoMywgbGVuZ3RoMyk7XG5leHBvcnQgY29uc3QgbGVuMiA9IG5ldyBEaWN0KDIsIGxlbmd0aDIpO1xuIl19