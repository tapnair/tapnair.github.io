(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function sm(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-13').attr('src', (dpi>1) ? 'images/windows-result-946.png' : 'images/windows-result-473.png');
$('.js-14').attr('src', (dpi>1) ? 'images/osx-result-838.png' : 'images/osx-result-419.png');
$('.js-15').attr('src', (dpi>1) ? 'images/mas_results-1900.jpg' : 'images/mas_results-950.jpg');};
if(!window.HTMLPictureElement){r();}
sm();
initMenu($('#menu-2')[0]);
$('.js-16').mouseenter(function() { $.loadImages('images/windows-result-928.png', function() { }) });
$('.js-16').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-16-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/windows-result-928.png'; } } });
$('.js-17').mouseenter(function() { $.loadImages('images/osx-result-730.png', function() { }) });
$('.js-17').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-17-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/osx-result-730.png'; } } });
$('.js-18').mouseenter(function() { $.loadImages('images/mas_results-1875.jpg', function() { }) });
$('.js-18').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-18-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/mas_results-1875.jpg'; } } });

});