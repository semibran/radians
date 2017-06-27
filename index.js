var RATIO_DEGREES = 180 / Math.PI
var RATIO_RADIANS = Math.PI / 180

exports.degrees = function (degrees) {
	return degrees * RATIO_RADIANS
}

exports.radians = function (radians) {
	return radians * RATIO_DEGREES
}
