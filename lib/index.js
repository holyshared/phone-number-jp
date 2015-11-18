'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitter = splitter;

var _dict = require('./dict');

var prefixesDict = {
  5: _dict.len5,
  4: _dict.len4,
  3: _dict.len3,
  2: _dict.len2
};

function splitter(phoneNumber) {
  var length = 5;

  var _arr = [_dict.len5, _dict.len4, _dict.len3, _dict.len2];
  for (var _i = 0; _i < _arr.length; _i++) {
    var dict = _arr[_i];
    var prefix = phoneNumber.substr(0, length);

    if (dict.contains(prefix) === false) {
      length--;
      continue;
    }

    var length2 = dict.at(prefix);

    return [prefix, phoneNumber.substr(length, length2), phoneNumber.substr(length + length2)];
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQVNnQixRQUFRLEdBQVIsUUFBUTs7OztBQVB4QixJQUFNLFlBQVksR0FBRztBQUNuQixHQUFDLFFBSE0sSUFBSSxBQUdKO0FBQ1AsR0FBQyxRQUpZLElBQUksQUFJVjtBQUNQLEdBQUMsUUFMa0IsSUFBSSxBQUtoQjtBQUNQLEdBQUMsUUFOd0IsSUFBSSxBQU10QjtDQUNSLENBQUM7O0FBRUssU0FBUyxRQUFRLENBQUMsV0FBVyxFQUFFO0FBQ3BDLE1BQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7YUFFRSxPQVpWLElBQUksUUFBRSxJQUFJLFFBQUUsSUFBSSxRQUFFLElBQUksQ0FZYztBQUEzQywyQ0FBNkM7QUFBeEMsUUFBSSxJQUFJLFdBQUEsQ0FBQTtBQUNYLFFBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ25DLFlBQU0sRUFBRSxDQUFDO0FBQ1QsZUFBUztLQUNWOztBQUVELFFBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRWhDLFdBQU8sQ0FDTCxNQUFNLEVBQ04sV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQ25DLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUNyQyxDQUFDO0dBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGVuNSwgbGVuNCwgbGVuMywgbGVuMiB9IGZyb20gJy4vZGljdCc7XG5cbmNvbnN0IHByZWZpeGVzRGljdCA9IHtcbiAgNTogbGVuNSxcbiAgNDogbGVuNCxcbiAgMzogbGVuMyxcbiAgMjogbGVuMlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0dGVyKHBob25lTnVtYmVyKSB7XG4gIGxldCBsZW5ndGggPSA1O1xuXG4gIGZvciAobGV0IGRpY3Qgb2YgWyBsZW41LCBsZW40LCBsZW4zLCBsZW4yIF0pIHtcbiAgICBjb25zdCBwcmVmaXggPSBwaG9uZU51bWJlci5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIGlmIChkaWN0LmNvbnRhaW5zKHByZWZpeCkgPT09IGZhbHNlKSB7XG4gICAgICBsZW5ndGgtLTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aDIgPSBkaWN0LmF0KHByZWZpeCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgcHJlZml4LFxuICAgICAgcGhvbmVOdW1iZXIuc3Vic3RyKGxlbmd0aCwgbGVuZ3RoMiksXG4gICAgICBwaG9uZU51bWJlci5zdWJzdHIobGVuZ3RoICsgbGVuZ3RoMilcbiAgICBdO1xuICB9XG59O1xuIl19