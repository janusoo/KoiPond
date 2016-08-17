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

// $('window').on('click', setNewCoord());

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var windowDimensions = windowWidth + ' x ' + windowHeight;

var yCoord;
var xCoord;

function setKoiCoord() {
	yCoord = Math.random() * 100 + "%";
	xCoord = Math.random() * 100 + "%";
	$('#koiSvg1').css({'top' : yCoord , 'left' : xCoord , 'display' : 'inline'});
}

function getCoords(e) {
    $('#koiSvg1').css({'top' : e.pageY + 'px', 'left' : e.pageX + 'px', 'transition' : 'top 3s, left 3s'})
}

function setNewCoord() {
	yCoord = Math.random() * 100 + '%';
	xCoord = Math.random() * 100 + '%';
	$('#koiSvg1').css({'top' : yCoord , 'left' : xCoord, 'transition' : 'top 20s, left 20s'});
}

$(document).ready(function() {
  setKoiCoord();

	$('html').on('click', getCoords);

	$('#koiSvg1').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', setNewCoord);
})