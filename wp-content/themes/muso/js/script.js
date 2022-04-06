window.addEventListener("load", function(){

  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const area  = document.querySelector(".js-area");
  const wrap  = document.querySelector(".js-wrap");
  const items = document.querySelectorAll(".js-item");
  const num   = items.length;

  //横幅を指定
  gsap.set(wrap,  { width: num * 100 + "%" });
  gsap.set(items, { width: 100 / num + "%" });

  gsap.to(items, {
    xPercent: -100 * ( num - 1 ), //x方向に移動させる
    ease: "none",
    scrollTrigger: {
      trigger: area, //トリガー
      start: "top top", //開始位置
      end: "+=1000", //終了位置
      pin: true, //ピン留め
      scrub: true, //スクロール量に応じて動かす
    }
  });
});




/**
 * サイドバーのTOP非表示、スクロールしたら表示
 */

$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('left', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 170) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'left' : '0px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'left' : '-100px'}, 200); 
            }
        }
    });

});


/**
 * サイドバー内メニューのTOP時非表示
 */
$(function() {
  // 変数にクラスを入れる
  var btn = $('.button');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 170) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});


/**
 * スマホヘッダーナビ
 */

$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



/**
 * 文字シュイーン
 */


// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(i){
    // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger_'+i).each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend isPlay');// 画面内に入ったらbgLRextendというクラス名を追記
    }else{
      //$(this).removeClass('bgLRextend')// 画面外に出たらbgLRextendというクラス名を外す
    }
  }); 

   // 文字列を囲う子要素
  $('.bgappearTrigger_'+i).each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }else{
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });   
}




// 画面をスクロールをしたら動かしたい場合の記述
  //$(window).scroll(function (){
    //BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  //});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
	  var i = 1;
    setTimeout('BgFadeAnime(i = 1);', 0);/* アニメーション用の関数を呼ぶ*/
	  setTimeout('BgFadeAnime(i = 2);', 500);/* アニメーション用の関数を呼ぶ*/
	  setTimeout('BgFadeAnime(i = 3);', 1000);/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述








/**
 * TOP 波線アニメーション
 */

var unit = 100,
  canvasList, // キャンバスの配列
  info = {}, // 全キャンバス共通の描画情報
  colorList; // 各キャンバスの色情報

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {
  info.seconds = 0;
  info.t = 0;
  canvasList = [];
  colorList = [];
  // canvas1個めの色指定
  canvasList.push(document.getElementById("waveCanvas"));
  colorList.push(["#eb593c", "#eb593c", "#eb593c", "#abdcd6", "#abdcd6"]); //重ねる波線の色設定

  // 各キャンバスの初期化
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex];
    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 100; //波の高さ
    canvas.contextCache = canvas.getContext("2d");
  }
  // 共通の更新処理呼び出し
  update();
}

function update() {
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex];
    // 各キャンバスの描画
    draw(canvas, colorList[canvasIndex]);
  }
  // 共通の描画情報の更新
  info.seconds = info.seconds + 0.014;
  info.t = info.seconds * Math.PI;
  // 自身の再起呼び出し
  setTimeout(update, 35);
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
  // 対象のcanvasのコンテキストを取得
  var context = canvas.contextCache;
  // キャンバスの描画をクリア
  context.clearRect(0, 0, canvas.width, canvas.height);

  //波線を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
  drawWave(canvas, color[0], 0.8, 3, 0);
  drawWave(canvas, color[1], 0.5, 4, 0);
  drawWave(canvas, color[2], 0.3, 1.6, 0);
  drawWave(canvas, color[3], 0.2, 3, 100);
  drawWave(canvas, color[4], 0.5, 1.6, 250);
}

/**
 * 波を描画
 * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
  context.strokeStyle = color; //線の色
  context.lineWidth = 1; //線の幅
  context.globalAlpha = alpha;
  context.beginPath(); //パスの開始
  drawSine(canvas, info.t / 0.5, zoom, delay);
  context.stroke(); //線
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
  var xAxis = Math.floor(canvas.height / 2);
  var yAxis = 0;
  var context = canvas.contextCache;
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.
  var x = t; //時間を横の位置とする
  var y = Math.sin(x) / zoom;
  context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

  // Loop to draw segments (横幅の分、波を描画)
  for (i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (-yAxis + i) / unit / zoom;
    y = Math.sin(x - delay) / 3;
    context.lineTo(i, unit * y + xAxis);
  }
}

init();



/**
 * TOP スクロール遷移
 */

$.scrollify({
	section : ".box",//1ページスクロールさせたいエリアクラス名
	scrollbars:"false",//スクロールバー表示・非表示設定
	interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
	easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 300, // スクロール時の速度
	
	//以下、ページネーション設定
	before:function(i,panels) {
    var ref = panels[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      pagination += "</ul>";

      $("#box1").append(pagination);//はじめのエリアにページネーションを表示
      $(".pagination a").on("click",$.scrollify.move);
    }

  });

