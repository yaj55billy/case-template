/*
  CTRL + F 搜尋
  常用 TEXT
  WOW
  GOTOP
  表單正則
  常用輪播 OWL
  window scroll 卷軸滾動時不斷偵測
  瀏覽器偵測
  header
  時間倒數
  亂數產生 max min 之間的數字
  jQ 動畫用法
  SWITCH 用法
  字數限制
  寬高 resize
  防止連續點擊
  POP
  判斷手機直向或橫向
  jQ 更動 CSS
  change
*/

// jQ API 
// https://api.jquery.com/

/* ---------------------------------------------
  常用 TEXT
--------------------------------------------- */

/*
  e.preventDefault();
  parents siblings
  $('html,body').animate({ scrollTop: 0 }, 'slow');
  $('.test').position().top   offset().top
  document.querySelector('.test');
  document.querySelectorAll('.test');
  document.getElementById('test');
  檔案可視區域寬： document.documentElement.clientWidth
  檔案可視區域高： document.documentElement.clientHeight
  網頁可見區域寬： document.body.clientWidth
  網頁可見區域高： document.body.clientHeight
  網頁可見區域寬： document.body.offsetWidth (包括邊線的寬)
  網頁可見區域高： document.body.offsetHeight (包括邊線的高)
  網頁正文全文寬： document.body.scrollWidth
  網頁正文全文高： document.body.scrollHeight
  網頁被捲去的高： document.body.scrollTop
  網頁被捲去的左： document.body.scrollLeft
  網頁正文部分上： window.screenTop
  網頁正文部分左： window.screenLeft
  螢幕分辨率的高： window.screen.height
  螢幕分辨率的寬： window.screen.width
  螢幕可用工作區高度： window.screen.availHeight
  螢幕可用工作區寬度： window.screen.availWidth
*/

/* ---------------------------------------------
  WOW
--------------------------------------------- */

// wow = new WOW({
//   boxClass: "wow", // default
//   animateClass: "animated", // default
//   offset: 0, // default
//   mobile: true, // default
//   live: true // default
// });
// wow.init();

/* ---------------------------------------------
  GOTOP
--------------------------------------------- */

// $(".js_gotop").click(function(e) {
//   e.preventDefault();
//   $("html,body").animate({ scrollTop: 0 }, "slow"); /* 返回到最頂上 */
//   return false;
// });

/* ---------------------------------------------
  表單正則
--------------------------------------------- */

// xxx

/* ---------------------------------------------
  常用輪播 OWL
--------------------------------------------- */

// $("#xxxxx.owl-carousel").owlCarousel({
//   // autoplay: true,
//   // autoplayTimeout: 4000,
//   // loop: true,
//   margin: 25,
//   nav: true,
//   navText: [
//     "<img src='images/arrow/left_arrow_2.png'>",
//     "<img src='images/arrow/right_arrow_2.png'>"
//   ],
//   responsive: {
//     0: {
//       items: 1
//     },
//     480: {
//       items: 2
//     },
//     768: {
//       items: 2
//     },
//     1000: {
//       items: 3
//     },
//     1300: {
//       items: 4
//     }
//   }
// });

/* ---------------------------------------------
  window scroll 卷軸滾動時不斷偵測
--------------------------------------------- */

$(window).scroll(function () {
  var wct = $(window).scrollTop();
  console.log(wct);
  // if (window_scrollTop > 120) {
  //   $('.page_people').addClass('active');
  // } else {
  //   $('.page_people').removeClass('active');
  // }
});

/* ---------------------------------------------
  瀏覽器偵測
--------------------------------------------- */

var getExplorer = (function () {
  var explorer = window.navigator.userAgent,
    compare = function (s) {
      return explorer.indexOf(s) >= 0;
    },
    ie11 = (function () {
      return "ActiveXObject" in window;
    })();
  if (compare("MSIE") || ie11) {
    return "ie";
  } else if (compare("Firefox") && !ie11) {
    return "Firefox";
  } else if (compare("Chrome") && !ie11) {
    if (explorer.indexOf("Edge") > -1) {
      return "Edge";
    } else {
      return "Chrome";
    }
  } else if (compare("Opera") && !ie11) {
    return "Opera";
  } else if (compare("Safari") && !ie11) {
    return "Safari";
  }
})();

if (getExplorer == "ie") {
  // 如果是 IE 就做...
  // $(".pw-change-btn").fadeOut(400);
}
if (getExplorer == "Edge") {
  // 如果是 IE 就做...
  // $(".pw-change-btn").fadeOut(400);
}

/*判斷手機系統是Android還是IOS*/
if (navigator.userAgent.match(/android/i)) {
  //如果是Android的話
} else if (navigator.userAgent.match(/(iphone|ipad|ipod);?/i)) {
  //如果是IOS的話
} else {
  //其他，電腦的瀏覽器，可以
}

/* ---------------------------------------------
      header
  --------------------------------------------- */

$(window).scroll(function () {
  var window_scrollTop = $(window).scrollTop();
  if (window_scrollTop > 10) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

// 漢堡選單
// var Menu = {
//   el: {
//     ham: $('.menu'),
//     menuTop: $('.menu-top'),
//     menuMiddle: $('.menu-middle'),
//     menuBottom: $('.menu-bottom')
//   },

//   init: function () {
//     Menu.bindUIactions();
//   },

//   bindUIactions: function () {
//     Menu.el.ham
//       .on(
//         'click',
//         function (event) {
//           Menu.activateMenu(event);
//           event.preventDefault();
//         }
//       );
//   },

//   activateMenu: function () {
//     Menu.el.menuTop.toggleClass('menu-top-click');
//     Menu.el.menuMiddle.toggleClass('menu-middle-click');
//     Menu.el.menuBottom.toggleClass('menu-bottom-click');
//   }
// };
// Menu.init();

// $('.js_menu').click(function () {
//   $(this).siblings('ul').toggleClass('active');
// });

/* ---------------------------------------------
  時間倒數
  --------------------------------------------- */

function countDownTime() {
  var time = 30000; // 倒數 30秒
  function timeCounter() {
    if (time <= 0) {
      alert("倒數結束");
      // 倒數結束 TO DO SOMETHING
    } else {
      timer.innerHTML = time / 1000;
      controlTime = setTimeout(timeCounter, 1000);
    }
    time -= 1000;
  }
  // 如果有什麼條件則結束倒數
  clearInterval(controlTime); //結束倒數
}

/* ---------------------------------------------
  亂數產生 max min 之間的數字
  --------------------------------------------- */

function getRandom(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/* ---------------------------------------------
  jQ 動畫用法
  --------------------------------------------- */

// function openingAni() {
//   console.log('mobile');
//   var openAni = $(".js_open_ani");
//   openAni.animate({ width: '62%', bottom: '70px', left: '0', right: '0' }, "slow");
//   openAni.animate({ width: '62%', bottom: '70px', left: '0', right: '0' }, "slow");
//   openAni.animate({ width: '60%', bottom: '70px', left: '0', right: '0' }, "slow");
//   openAni.animate({ width: '55%', bottom: '20%', left: '15%', right: '0' }, "slow");
//   openAni.animate({ width: '55%', bottom: '40%', left: '0', right: '15%' }, "slow");
//   openAni.animate({ width: '50%', bottom: 'auto', left: '0', right: '0', top: '-50px' }, "slow");
//   frameShow();
// }
// openingAni();

/* ---------------------------------------------
  SWITCH 用法
  --------------------------------------------- */

var day = new Date().getDay();
switch (day) {
  case 0:
    x = "Today it's Sunday";
    break;
  case 1:
    x = "Today it's Monday";
    break;
  case 2:
    x = "Today it's Tuesday";
    break;
  case 3:
    x = "Today it's Wednesday";
    break;
  case 4:
    x = "Today it's Thursday";
    break;
  case 5:
    x = "Today it's Friday";
    break;
  case 6:
    x = "Today it's Saturday";
    break;
}

/* ---------------------------------------------
  字數限制
  --------------------------------------------- */

var len = 55;
$(".index_geosstar_list_con").each(function (i) {
  if ($(this).text().length > len) {
    // $(this).attr("title",$(this).text());
    var text =
      $(this)
        .text()
        .substring(0, len - 1) + "...";
    $(this).text(text);
  }
});

/* ---------------------------------------------
  寬高 resize
  --------------------------------------------- */
var $win = $(window),
  w = $win.width(),
  h = $win.height();

$win
  .on("resize", function () {
    w = $win.width();
    h = $win.height();
    // 這邊可寫需遇到 resize 的內容
  })
  .resize();

/* ---------------------------------------------
  防止連續點擊
  --------------------------------------------- */

$(".jsMbCollapseBtn").click(function (e) {
  if ($(this).hasClass("active")) {
    // 防止 active狀態繼續點
    return false;
  } else {
    // do something

    $(".jsMbCollapseBtn").removeClass("active");
    $(this).addClass("active");
  }
});

/* ---------------------------------------------
  POP
  --------------------------------------------- */

// $('.js_open_pop').click(function (e) {
//   e.preventDefault();
//   var thisDataName = $(this).attr('data-name');
//   console.log(thisDataName);
//   $('.js_lightbox#' + thisDataName).fadeIn();
// });

// $('.js_bg_close').click(function () {
//   $(this).parents('.js_lightbox').fadeOut();
// });

/* ---------------------------------------------
  判斷手機直向或橫向
  --------------------------------------------- */

window.addEventListener("orientationchange", onOrientationchange, false);
function onOrientationchange() {
  if (window.orientation === 180 || window.orientation === 0) {
    //直式
  }
  if (window.orientation === 90 || window.orientation === -90) {
    //橫式
    // do something
    // alert('為確保功能正常，且讓您有最好的使用體驗，請將您的螢幕旋轉為直向，謝謝！');
  }
}

/* ---------------------------------------------
  jQ 更動 CSS
  --------------------------------------------- */

// $('#js_open_menu').click(function (e) {
//   e.preventDefault();
//   $('.menu').addClass('active');
//   $('html').css({
//     'position': 'relative',
//     'overflow-y': 'hidden'
//   });
// });

/* ---------------------------------------------
  change
  --------------------------------------------- */
// $("#sourOfIncm_10").change(function () {
//   if ($("#sourOfIncm_10").is(":checked")) {
//     $('.sourOfIncm_con .js_con_10').slideDown(400).addClass('active');
//     judgeElement();
//   }
//   else {
//     $('.sourOfIncm_con .js_con_10').slideUp(400).removeClass('active');
//     judgeElement();
//   }
// });

/* ---------------------------------------------
    尚未整理
  --------------------------------------------- */

// $(".js_arrow").click(function () {
//   $(this).parents().siblings("ul").slideToggle();
//   $(this).toggleClass("active");
// });

// 如果點到的是其他區塊(除了我們指定的)，則做些事情
// $(document).mouseup(function (e) {
//   var container = $(".suggest"); // 這邊放你想要排除的區塊
//   if (!container.is(e.target) && container.has(e.target).length === 0) {
//     container.hide();
//   }
// });
// 如果點到的是其他區塊(除了我們指定的)，則做些事情 END

// $(".list_first").each(function () {
//   $(this).click(function () {
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//     } else {
//       $(this).addClass("active");
//     }
//   });
// });

$(".collapse").click(function (e) {
  console.log($(this).attr("href"));
});
