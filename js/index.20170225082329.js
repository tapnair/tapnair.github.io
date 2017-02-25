(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function sm(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/ventmaker_cover-440.jpg' : 'images/ventmaker_cover-220.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/cover_image-248.png' : 'images/cover_image-124.png');
$('.js-3').attr('src', (dpi>1) ? 'images/cover_image-354.png' : 'images/cover_image-177.png');
$('.js-4').attr('src', (dpi>1) ? 'images/cover_image-268.png' : 'images/cover_image-134.png');

$('.js-6').attr('src', (dpi>1) ? 'images/configsavermenu-254.png' : 'images/configsavermenu-127.png');

$('.js-8').attr('src', (dpi>1) ? 'images/dialog-414.png' : 'images/dialog-207.png');
$('.js-9').attr('src', (dpi>1) ? 'images/nester_cover-440.jpg' : 'images/nester_cover-220.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/ugs_cover-440.png' : 'images/ugs_cover-220.png');
$('.js-11').attr('src', (dpi>1) ? 'images/octofusion_cover-260.jpg' : 'images/octofusion_cover-130.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/cover_image-440.png' : 'images/cover_image-220.png');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-13').attr('src', 'images/twitter-61-1.png');

}
sm();
initMenu($('#menu-1')[0]);
$('.js-14').mouseenter(function() { $.loadImages('images/ventmaker_cover-901.jpg', function() { }) });
$('.js-14').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-14-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/ventmaker_cover-901.jpg'; } } });
$('.js-15').mouseenter(function() { $.loadImages('images/cover_image-478.png', function() { }) });
$('.js-15').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-15-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/cover_image-478.png'; } } });
$('.js-16').mouseenter(function() { $.loadImages('images/cover_image-743.png', function() { }) });
$('.js-16').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-16-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/cover_image-743.png'; } } });
$('.js-17').mouseenter(function() { $.loadImages('images/cover_image-613.png', function() { }) });
$('.js-17').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-17-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/cover_image-613.png'; } } });
$('.js-18').mouseenter(function() { $.loadImages('images/showhidden-198.png', function() { }) });
$('.js-18').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-18-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/showhidden-198.png'; } } });
$('.js-19').mouseenter(function() { $.loadImages('images/configsavermenu-168.png', function() { }) });
$('.js-19').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-19-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/configsavermenu-168.png'; } } });
$('.js-20').mouseenter(function() { $.loadImages('images/readmecover-220.png', function() { }) });
$('.js-20').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-20-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/readmecover-220.png'; } } });
$('.js-21').mouseenter(function() { $.loadImages('images/dialog-333.png', function() { }) });
$('.js-21').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-21-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/dialog-333.png'; } } });
$('.js-22').mouseenter(function() { $.loadImages('images/nester_cover-1156.jpg', function() { }) });
$('.js-22').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-22-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/nester_cover-1156.jpg'; } } });
$('.js-23').mouseenter(function() { $.loadImages('images/ugs_cover-616.png', function() { }) });
$('.js-23').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-23-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/ugs_cover-616.png'; } } });
$('.js-24').mouseenter(function() { $.loadImages('images/octofusion_cover-503.jpg', function() { }) });
$('.js-24').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-24-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/octofusion_cover-503.jpg'; } } });
$('.js-25').mouseenter(function() { $.loadImages('images/cover_image-1455.png', function() { }) });
$('.js-25').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-25-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/cover_image-1455.png'; } } });

});