'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dict = require('./dict');

exports.default = {
  split: function split(phoneNumber) {
    var unkown = [phoneNumber, '', ''];

    var _arr = [_dict.len5, _dict.len4, _dict.len3, _dict.len2];
    for (var _i = 0; _i < _arr.length; _i++) {
      var dict = _arr[_i];
      var prefix = dict.prefixFrom(phoneNumber);

      if (dict.contains(prefix) === false) {
        continue;
      }

      var prefixLength = dict.prefixLength;
      var secondaryLength = dict.lengthOfSecondary(prefix);

      return [prefix, phoneNumber.substr(prefixLength, secondaryLength), phoneNumber.substr(prefixLength + secondaryLength)];
    }

    return unkown;
  },
  format: function format(phoneNumber) {
    return this.split(phoneNumber).join('-');
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFFZTtBQUViLE9BQUssaUJBQUMsV0FBVyxFQUFFO0FBQ2pCLFFBQU0sTUFBTSxHQUFHLENBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUUsQ0FBQzs7ZUFFdEIsT0FQWixJQUFJLFFBQUUsSUFBSSxRQUFFLElBQUksUUFBRSxJQUFJLENBT2dCO0FBQTNDLDZDQUE2QztBQUF4QyxVQUFJLElBQUksV0FBQSxDQUFBO0FBQ1gsVUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFNUMsVUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUNuQyxpQkFBUztPQUNWOztBQUVELFVBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDdkMsVUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV2RCxhQUFPLENBQ0wsTUFBTSxFQUNOLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxFQUNqRCxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FDbkQsQ0FBQztLQUNIOztBQUVELFdBQU8sTUFBTSxDQUFDO0dBQ2Y7QUFFRCxRQUFNLGtCQUFDLFdBQVcsRUFBRTtBQUNsQixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzFDO0NBRUYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsZW41LCBsZW40LCBsZW4zLCBsZW4yIH0gZnJvbSAnLi9kaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHNwbGl0KHBob25lTnVtYmVyKSB7XG4gICAgY29uc3QgdW5rb3duID0gWyBwaG9uZU51bWJlciwgJycsICcnIF07XG5cbiAgICBmb3IgKGxldCBkaWN0IG9mIFsgbGVuNSwgbGVuNCwgbGVuMywgbGVuMiBdKSB7XG4gICAgICBjb25zdCBwcmVmaXggPSBkaWN0LnByZWZpeEZyb20ocGhvbmVOdW1iZXIpO1xuXG4gICAgICBpZiAoZGljdC5jb250YWlucyhwcmVmaXgpID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJlZml4TGVuZ3RoID0gZGljdC5wcmVmaXhMZW5ndGg7XG4gICAgICBjb25zdCBzZWNvbmRhcnlMZW5ndGggPSBkaWN0Lmxlbmd0aE9mU2Vjb25kYXJ5KHByZWZpeCk7XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHByZWZpeCxcbiAgICAgICAgcGhvbmVOdW1iZXIuc3Vic3RyKHByZWZpeExlbmd0aCwgc2Vjb25kYXJ5TGVuZ3RoKSxcbiAgICAgICAgcGhvbmVOdW1iZXIuc3Vic3RyKHByZWZpeExlbmd0aCArIHNlY29uZGFyeUxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVua293bjtcbiAgfSxcblxuICBmb3JtYXQocGhvbmVOdW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpdChwaG9uZU51bWJlcikuam9pbignLScpO1xuICB9XG5cbn07XG4iXX0=