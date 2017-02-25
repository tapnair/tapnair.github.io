(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function sm(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/ventmaker_cover-440.jpg' : 'images/ventmaker_cover-220.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/cover_image-248.png' : 'images/cover_image-124.png');
$('.js-3').attr('src', (dpi>1) ? 'images/cover_image-354.jpg' : 'images/cover_image-177.jpg');
$('.js-4').attr('src', (dpi>1) ? 'images/cover_image-284.png' : 'images/cover_image-142.png');

$('.js-6').attr('src', (dpi>1) ? 'images/configsavermenu-254.png' : 'images/configsavermenu-127.png');

$('.js-8').attr('src', (dpi>1) ? 'images/dialog-414.png' : 'images/dialog-207.png');
$('.js-9').attr('src', (dpi>1) ? 'images/nester_cover-440.jpg' : 'images/nester_cover-220.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/ugs_cover-440.png' : 'images/ugs_cover-220.png');
$('.js-11').attr('src', (dpi>1) ? 'images/octofusion_cover-260.jpg' : 'images/octofusion_cover-130.jpg');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-12').attr('src', 'images/twitter-61.png');

}
sm();
initMenu($('#menu-1')[0]);

});