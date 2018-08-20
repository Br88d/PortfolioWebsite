//equal height
equalheight=function(t){var e,i=0,n=0,h=new Array;$(t).each(function(){if(e=$(this),$(e).height("auto"),topPostion=e.position().top,n!=topPostion){for(currentDiv=0;currentDiv<h.length;currentDiv++)h[currentDiv].height(i);h.length=0,n=topPostion,i=e.height(),h.push(e)}else h.push(e),i=i<e.height()?e.height():i;for(currentDiv=0;currentDiv<h.length;currentDiv++)h[currentDiv].height(i)})},$(window).load(function(){equalheight(".js-equal")}),$(window).resize(function(){equalheight(".js-equal")});


//general script
$(document).ready(function(){$(".menu-launcher").click(function(){$(this).toggleClass("active"),$("html, body").toggleClass("mobile")}),$("#box-click").click(function(){$("html, body").animate({scrollTop:$("#hero-scroll").offset().top},800)}),$("#to-top").click(function(){$("html, body").animate({scrollTop:$("#top").offset().top},400)})}),$(window).resize(function(){$(window).width()>480&&($("html, body").removeClass("mobile"),$(".menu-launcher").removeClass("active"))}),$(window).scroll(function(){var o=$(window).scrollTop();o>10?$(".box-container").addClass("zero"):$(".box-container").removeClass("zero")});
 

//ios touch devices background attachment scroll
navigator.userAgent.match(/like Mac OS X/i)&&$(".slidehero-contact, .slidehero-home, .slidehero-recent, .slidehero-cimobile, .slidehero-css-framework, .slidehero-email-framework, .slidehero-mancity, .slidehero-myaccount, .slidehero-watermark, .slidefooter-contact, .slidefooter-home, .slidefooter-recent, .slidefooter-cimobile, .slidefooter-css-framework, .slidefooter-email-framework, .slidefooter-mancity, .slidefooter-myaccount, .slidefooter-watermark").addClass("scroll");


//image box slider
$(document).ready(function(){
  $('.bxslider').bxSlider();
});


//Jquery retina
Retina = function() {
    return {
        init: function(){
            //Get pixel ratio and perform retina replacement
            var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
            if (pixelRatio > 1) {
                $("img").each(function(idx, el){
                    el = $(el);
                    if (el.attr("data-src2x")) {
                        el.attr("data-src-orig", el.attr("src"));
                        el.attr("src", el.attr("data-src2x"));
                    }
                });
            }
        }
    };
}();
//Init
Retina.init();

