<?php get_header(); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<div class="content-1000wrap">

<div class="breadcrumb">
    <?php
    if(function_exists('bcn_display'))
    {
    bcn_display();
    }
    ?>
</div><!--/ breadcrumb -->


<h1 class="entry-title">お探しのページは見つかりませんでした</h1>

<p>誠に申し訳ありませんが、お探しのページにアクセスできませんでした。<br>
お探しのページは、移動または削除された可能性がございます。<br>
<a href="<?php bloginfo('url'); ?>"><?php bloginfo('name'); ?>トップページ</a>からお探しの情報をお求めください。</p>

<?php get_template_part( 'template-parts/snsbutton' ); ?>

</div>
</article><!-- #post-## -->


<?php get_footer(); ?>
