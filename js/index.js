// $('window').on('click', setNewCoord());
var fishSelectors = ['#koiSvg1', '#koiSvg2', '#koiSvg3'];
var fishClassSelector = '.koi-svg';
var n = 0;

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var windowDimensions = windowWidth + ' x ' + windowHeight;

var yCoord;
var xCoord;

function initialPositionFish(selectors) {
	for (var i = 0; i < selectors.length; i++) {
		var selector = selectors[i];
		svgLoaded(selector);
	}
}

function svgLoaded(selector) {
	console.log("svg loaded firing")
	setKoiCoord(selector);
	setTimeout(setNewCoord(selector), 10);
}

function setKoiCoord(selector) {
	yCoord = Math.random() * 100 + "%";
	xCoord = Math.random() * 100 + "%";
	$(selector).css({'top' : yCoord , 'left' : xCoord, 'display': 'inline'} );
	// setNewCoord();
}

function setNewCoord(selector) {
	n++;
	console.log("set new Coord firing for the " + n + "th time");
	yCoord = Math.random() * 100 + '%';
	xCoord = Math.random() * 100 + '%';

	var currentX = $(selector).offset().left;
	var currentY = $(selector).offset().top;
	var destX = xCoord;
	var destY = yCoord;

	var angleDeg = Math.atan2(destY - currentY, destX - currentX) * 180 / Math.PI;

	var mathRandom = Math.random() * 50;

	$(selector).css({'transform' : 'rotate(' + angleDeg + 'deg)', 'top' : yCoord , 'left' : xCoord, 'transition' : 'top ' + mathRandom + 's, left ' + mathRandom + 's, transform ' + mathRandom + 's'});
}

function transitionListener(fishClass) {
		$(fishClass).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
			setNewAll(fishSelectors)}
		);
}

function setNewAll(selectors){
	console.log("firing")
	for (var i = 0; i < selectors.length; i++) {
		var selector = selectors[i];
		setNewCoord(selector);
	}
}

function getCoords(e) {
	var currentX = $('.koi-svg').offset().left;
	var currentY = $('.koi-svg').offset().top;
	var destX = e.pageX;
	var destY = e.pageY;

	var angleDeg = Math.atan2(destY - currentY, destX - currentX) * 180 / Math.PI;

  $('.koi-svg').css({'transform' : 'rotate(' + angleDeg + 'deg)', 'top' : e.pageY + 'px', 'left' : e.pageX + 'px', 'transition' : 'top 3s, left 3s, transform 3s'})
}

// Control
$(document).ready(function() {
	initialPositionFish(fishSelectors);

	$('html').on('click', getCoords);

	transitionListener(fishClassSelector);
})