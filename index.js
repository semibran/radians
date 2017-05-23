exports.degrees = degrees
exports.radians = radians

var RATIO_DEGREES = 180 / Math.PI
var RATIO_RADIANS = Math.PI / 180

function degrees(degrees) {
	return degrees * RATIO_RADIANS
}

function radians(radians) {
	return radians * RATIO_DEGREES
}
