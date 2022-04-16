<section class="content-1000wrap">
<h2>ABOUT</h2>


	
<div class="works_bn_wrap">
<ul class="col__wrap--margin">
          <li class="col--pc-3 col--sp-12">
			  <div class="about_p_img1">
			  </div></li>
          <li class="col--pc-9 col--sp-12">
			  <div class="about_p_txt_box">
			  <p class="MB--0">TSUJITA TOMOYO</p>
			  <p class="MT--5">経歴<br>
2015-2017 ECサイトのWEBデザイン・コーディングの業務を行う。<br>
			  2019-2021 主に専門学校関連のWEBデザイン・コーディングの業務を行う。</p>
				  </div>
        </ul>
	
	<p>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>

	
	
	<p>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br></p>
</div>
	
	<div style="margin: auto;text-align: center;">
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
       <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
    <div class="slide_box">
        <img src="/wp-content/themes/muso/img/banner/bn_44.jpg" alt="">
        <div class="screen"></div>
    </div>
	</div>

	
	
</section>

<style>

* {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.slide_box{
    width: 100%;
    position: relative;
    overflow: hidden;
}

.screen{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: 2s cubic-bezier(.26,0,.07,1);
}
.screen.show{
    transform: translateX(100%);
}
@keyframes line-anim {
    to{
        transform: translateY(100%);
    }
}
	
	</style>

<script>

	$(function(){
    $(window).scroll(function (){
        $('.screen').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight){
              $(this).addClass('show');
            }
        });
    });
});
</script>
