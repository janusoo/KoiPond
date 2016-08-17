// function getCoords(elem) { // crossbrowser version
//     var box = elem.getBoundingClientRect();

//     var body = document.body;
//     var docEl = document.documentElement;

//     var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//     var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

//     var clientTop = docEl.clientTop || body.clientTop || 0;
//     var clientLeft = docEl.clientLeft || body.clientLeft || 0;

//     var top  = box.top +  scrollTop - clientTop;
//     var left = box.left + scrollLeft - clientLeft;

//     return { top: Math.round(top), left: Math.round(left) };
// }

$(document).ready(function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var windowDimensions = windowWidth + ' x ' + windowHeight;

	var xCoord = Math.random() * 100 + "%";
	var yCoord = Math.random() * 100 + "%";

	function setKoiCoord() {
		$('#koiSvg1').css({"top" : yCoord , "left" : xCoord , "display" : "inline"});
	}
	setKoiCoord();

	// $()
})