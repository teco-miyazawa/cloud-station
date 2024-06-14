$(function () {
/******************************
telリンク処理
******************************/
$(function() {
  var ua = navigator.userAgent.toLowerCase();
  var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

  if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
      e.preventDefault();
    });
  }
});
/******************************
pagetop
******************************/
	if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
	var topBtn = $('.pagetop2 img');	
	//スクロールしてトップ
	topBtn.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
	});	
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: -36
		}, 500);
		return false;
    });	
	}
	else {
		var topBtn = $('.pagetop img');
		//スクロールしてトップ
		topBtn.hide();
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					topBtn.fadeIn();
				} else {
					topBtn.fadeOut();
				}
		});
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	}
/******************************
fixHeader
******************************/
    var $nav = $('nav'),
       navHead = $nav.offset().top;
    $(window).on("scroll", function () {
        //scrollTopの値の分スクロールしたらナビに.fixedが追加される。
        if ($(this).scrollTop() > navHead) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
/******************************
slideDownNavi2
******************************/
$("nav li").hover(
	function () {
		$(this).children('div').slideDown(90);
		$(this).addClass("active2");
	},
	function () {
		$(this).children('div').slideUp(90);
		$(this).removeClass("active2");
	});
/******************************
spMenu2
******************************/
	var scrollpos = 0;
	var headerLogoHight = $('.sp_navi .header_logo').height();
	/*** ロゴの表示非表示切り替え動作 ***/
	var navi = $('.sp_navi .header_logo');
	$(window).scroll(function () {
		var scrollpos2 = $(document).scrollTop();

		// ロゴの表示非表示切り替え
		if (scrollpos2 > 0 && scrollpos2 < headerLogoHight) {
			$('.sp_navi .header_logo').css('display', 'block');
		} else if (scrollpos2 > headerLogoHight) {
			$('.sp_navi .header_logo').css('display', 'none');
			$('.sp_navi').addClass('fixed');
		} else if (scrollpos < headerLogoHight) {
			$('.sp_navi .header_logo').css('display', 'block');
			$('.sp_navi').removeClass('fixed');
		}
});	

/*** ハンバーガーメニュークリック時の動作 ***/
	var navi_fixed_area = $('.sp_navi_fixed_area');
	$(".sp_navi dt a").on("click", function () {
		var active_state = $(this).attr("class");
		$(this).toggleClass("active");
		$(".sp_navi_list").slideToggle(300, function () {
			if (active_state == "active") {
				navi_fixed_area.css('height', '62px');
				$('.sp_navi').css('height', '124px');
			}
		});
		// メニュー表示時はページのスクロール固定
		if ($(this).attr("class") == "active") {
			// 現在のスクロール値を取得
			scrollpos = $(document).scrollTop();
			$('body').addClass('sp_fixed').css({
				'top': -scrollpos
			});
			$('.sp_navi').css('height', '100%');
		} else {
			$('body').removeClass('sp_fixed').css({
				'top': 0
			});
			window.scrollTo(0, scrollpos);
		}
	});
/*** ナビメニューの親メニューをクリックした時の動作 ***/
	$(".sp_navi_parent").on("click", function () {
		var parent_menu = $(this);
		parent_menu.children(".sp_navi_children").slideToggle(300, function () {
			if ($(this).is(':hidden')) {
				parent_menu.removeClass("sp_navi_parent_active");
			} else {
				parent_menu.addClass("sp_navi_parent_active");
			}
		});

	});
$(".sp_link li a").on("click", function() {
    var targetHref = $(this).attr("href");
    var targetPath = targetHref.replace(location.origin,"")
    var nowPath = location.pathname.replace("/●●●●●●●●●●●●/","").replace("/HP/","").replace("/RP/","");
    if (nowPath.indexOf('') != -1
    && targetPath.indexOf('#')) {
      var innerLinkName = targetPath.substring(targetPath.indexOf("#")+1,targetPath.length)
      var innerLinkPos = $("#" + innerLinkName).offset().top;
       $(".sp_navi_list").slideUp(300);
       $(".sp_navi").css('height', '124px');
       $(".sp_navi dt a").removeClass("active");
        $('body').removeClass('sp_fixed').css({'top': 0});
        $('html,body').animate({scrollTop: innerLinkPos + scrollpos}, 500, 'swing');
        //window.scrollTo( 0 , innerLinkPos );
    }
  });
/******************************
smoothscroll
******************************/	
//var urlHash = location.hash;
//if(urlHash) {
    //$('body,html').stop().scrollTop(0);
    //setTimeout(function(){
       //var target = $(urlHash);
        //var position = target.offset().top;
        //$('body,html').stop().animate({scrollTop:position}, 500);
    //}, 100);
//}	
//$('a[href^="#"]').on('click', function () {
//var anch = $(this).attr('href');
//var pos = $(anch).offset().top;
//if (anch === '#') {
	//return
//}
//$('body,html').stop().animate({
	//scrollTop: pos
//}, 500);
//});
//);
	
/******************************
smoothscroll
******************************/
$('a[href^="#"]').on('click', function () {
var anch = $(this).attr('href');
var pos = $(anch).offset().top;
if (anch === '#') {
	return
}
$('body,html').stop().animate({
	scrollTop: pos
}, 500);
});

// ページ外からのスムーススクロール（IDへのリンク）
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}

});	
/******************************
echo.js
******************************/
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,a={},u=function(){},d=function(t){return null===t.offsetParent},l=function(t,e){if(d(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},i=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,l=n.offsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,l),b:s(n.offsetBottom,l),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u,a.render(),document.addEventListener?(t.addEventListener("scroll",i,!1),t.addEventListener("load",i,!1)):(t.attachEvent("onscroll",i),t.attachEvent("onload",i))},a.render=function(n){for(var o,r,d=(n||document).querySelectorAll("[data-echo], [data-echo-background]"),i=d.length,f={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},s=0;i>s;s++)r=d[s],l(r,f)?(c&&r.setAttribute("data-echo-placeholder",r.src),null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+r.getAttribute("data-echo-background")+")":r.src!==(o=r.getAttribute("data-echo"))&&(r.src=o),c||(r.removeAttribute("data-echo"),r.removeAttribute("data-echo-background")),u(r,"load")):c&&(o=r.getAttribute("data-echo-placeholder"))&&(null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+o+")":r.src=o,r.removeAttribute("data-echo-placeholder"),u(r,"unload"));i||a.detach()},a.detach=function(){document.removeEventListener?t.removeEventListener("scroll",i):t.detachEvent("onscroll",i),clearTimeout(n)},a});
