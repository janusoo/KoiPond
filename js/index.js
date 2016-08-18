// $('window').on('click', setNewCoord());

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var windowDimensions = windowWidth + ' x ' + windowHeight;

var yCoord;
var xCoord;

function setKoiCoord() {
	yCoord = Math.random() * 100 + "%";
	xCoord = Math.random() * 100 + "%";
	$('.koi-svg').css({'top' : yCoord , 'left' : xCoord, 'display': 'inline'} );
	// setNewCoord();
}

function getCoords(e) {
	var currentX = $('.koi-svg').offset().left;
	var currentY = $('.koi-svg').offset().top;
	var destX = e.pageX;
	var destY = e.pageY;

	var angleDeg = Math.atan2(destY - currentY, destX - currentX) * 180 / Math.PI;

  $('.koi-svg').css({'transform' : 'rotate(' + angleDeg + 'deg)', 'top' : e.pageY + 'px', 'left' : e.pageX + 'px', 'transition' : 'top 3s, left 3s, transform 3s'})
}

function setNewCoord() {
	yCoord = Math.random() * 100 + '%';
	xCoord = Math.random() * 100 + '%';

	var currentX = $('.koi-svg').offset().left;
	var currentY = $('.koi-svg').offset().top;
	var destX = xCoord;
	var destY = yCoord;

	var angleDeg = Math.atan2(destY - currentY, destX - currentX) * 180 / Math.PI;

	$('.koi-svg').css({'transform' : 'rotate(' + angleDeg + 'deg)', 'top' : yCoord , 'left' : xCoord, 'transition' : 'top 20s, left 20s, transform 3s'});
}

function svgLoaded() {
	setKoiCoord();
	setTimeout(setNewCoord, 10);
}

$(document).ready(function() {
	// setKoiCoord();
	// setTimeout(setNewCoord, 10);
	$('#koiSvg1').on('load', svgLoaded);
	$('#koiSvg2').on('load', svgLoaded);
	$('#koiSvg3').on('load', svgLoaded);

	$('html').on('click', getCoords);

	// $('.koi-svg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', setNewCoord);
	$('.koi-svg').on('transitionend', setNewCoord);
})