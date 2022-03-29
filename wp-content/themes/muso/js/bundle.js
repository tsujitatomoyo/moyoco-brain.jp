(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';


  function pointer() {

    // /* Pointer
    // ------------------------------------------------------------ */
    var cursor = $(".c-pointer"),
        follower = $(".c-follower");

    // 年賀状
    $("a, button, .p-top-newyear__tiger").not('.view').on({
      "mouseenter": function mouseenter() {
        TweenMax.to(follower, .3, { scale: .666, ease: Back.easeInOut.config(1.4) });
      },
      "mouseleave": function mouseleave() {
        TweenMax.to(follower, .3, { scale: .333, ease: Back.easeInOut.config(1.4) });
      }
    });

  }





  /* functions
  ------------------------------------------------------------ */
  (function () {
    var cursor = $(".c-pointer"),
        follower = $(".c-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function onRepeat() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 44,
            top: posY - 44
          }
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    var pointerFrag = false;

    $(document).on("load mousemove", function (e) {
      if (!pointerFrag) {
        TweenMax.to(".c-pointer", .3, {
          delay: .5,
          scale: 1
        });
        TweenMax.to(".c-follower", .3, {
          delay: .5,
          scale: .333,
          onComplete: function onComplete() {
            pointerFrag = true;
            pointer();
          }
        });
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    common();
    pointer();
    commonSingle();

 
  })();

})));
