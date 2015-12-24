'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dict = require('./dict');

exports.default = {
  split: function split(phoneNumber) {
    var unkown = [phoneNumber];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFFZTtBQUViLE9BQUssaUJBQUMsV0FBVyxFQUFFO0FBQ2pCLFFBQU0sTUFBTSxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7O2VBRWQsT0FQWixJQUFJLFFBQUUsSUFBSSxRQUFFLElBQUksUUFBRSxJQUFJLENBT2dCO0FBQTNDLDZDQUE2QztBQUF4QyxVQUFJLElBQUksV0FBQSxDQUFBO0FBQ1gsVUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFNUMsVUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUNuQyxpQkFBUztPQUNWOztBQUVELFVBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDdkMsVUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV2RCxhQUFPLENBQ0wsTUFBTSxFQUNOLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxFQUNqRCxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FDbkQsQ0FBQztLQUNIOztBQUVELFdBQU8sTUFBTSxDQUFDO0dBQ2Y7QUFFRCxRQUFNLGtCQUFDLFdBQVcsRUFBRTtBQUNsQixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzFDO0NBRUYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsZW41LCBsZW40LCBsZW4zLCBsZW4yIH0gZnJvbSAnLi9kaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHNwbGl0KHBob25lTnVtYmVyKSB7XG4gICAgY29uc3QgdW5rb3duID0gWyBwaG9uZU51bWJlciBdO1xuXG4gICAgZm9yIChsZXQgZGljdCBvZiBbIGxlbjUsIGxlbjQsIGxlbjMsIGxlbjIgXSkge1xuICAgICAgY29uc3QgcHJlZml4ID0gZGljdC5wcmVmaXhGcm9tKHBob25lTnVtYmVyKTtcblxuICAgICAgaWYgKGRpY3QuY29udGFpbnMocHJlZml4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZWZpeExlbmd0aCA9IGRpY3QucHJlZml4TGVuZ3RoO1xuICAgICAgY29uc3Qgc2Vjb25kYXJ5TGVuZ3RoID0gZGljdC5sZW5ndGhPZlNlY29uZGFyeShwcmVmaXgpO1xuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBwcmVmaXgsXG4gICAgICAgIHBob25lTnVtYmVyLnN1YnN0cihwcmVmaXhMZW5ndGgsIHNlY29uZGFyeUxlbmd0aCksXG4gICAgICAgIHBob25lTnVtYmVyLnN1YnN0cihwcmVmaXhMZW5ndGggKyBzZWNvbmRhcnlMZW5ndGgpXG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiB1bmtvd247XG4gIH0sXG5cbiAgZm9ybWF0KHBob25lTnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaXQocGhvbmVOdW1iZXIpLmpvaW4oJy0nKTtcbiAgfVxuXG59O1xuIl19