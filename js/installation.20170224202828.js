(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function sm(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-26').attr('src', (dpi>1) ? 'images/windows-result-946-1.png' : 'images/windows-result-473-1.png');
$('.js-27').attr('src', (dpi>1) ? 'images/osx-result-838-1.png' : 'images/osx-result-419-1.png');
$('.js-28').attr('src', (dpi>1) ? 'images/mas_results-1900-1.jpg' : 'images/mas_results-950-1.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/scripts-addins-850.png' : 'images/scripts-addins-425.png');
$('.js-30').attr('src', (dpi>1) ? 'images/archiver-addin-468.png' : 'images/archiver-addin-234.png');};
if(!window.HTMLPictureElement){r();}
sm();
initMenu($('#menu-2')[0]);
$('.js-31').mouseenter(function() { $.loadImages('images/windows-result-928.png', function() { }) });
$('.js-31').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-31-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/windows-result-928.png'; } } });
$('.js-32').mouseenter(function() { $.loadImages('images/osx-result-730.png', function() { }) });
$('.js-32').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-32-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/osx-result-730.png'; } } });
$('.js-33').mouseenter(function() { $.loadImages('images/mas_results-1875.jpg', function() { }) });
$('.js-33').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-33-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/mas_results-1875.jpg'; } } });
$('.js-34').mouseenter(function() { $.loadImages('images/scripts-addins-638.png', function() { }) });
$('.js-34').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-34-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/scripts-addins-638.png'; } } });
$('.js-35').mouseenter(function() { $.loadImages('images/archiver-addin-512.png', function() { }) });
$('.js-35').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-35-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/archiver-addin-512.png'; } } });

});