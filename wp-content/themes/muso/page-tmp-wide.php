<?php
/*固定ページ：1カラム全画面用のテンプレート

Template Name: 1カラムワイド

*/
 get_header(); ?>
<section class="content-tmp-wide">
<div class="content-1000wrap">
<div class="breadcrumb">
    <?php
    if(function_exists('bcn_display'))
    {
    bcn_display();
    }
    ?>
</div><!--/ breadcrumb -->
</div>


<article id="post-<?php the_ID(); ?>" <?php post_class('entry-content--wide'); ?>>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php $slug = $post->post_name; ?>


<?php
//親階層スラッグ取得
//get_template_part("pages/第二階層スラッグ/第三階層スラッグ/..../page", 現在のスラッグ);
$parent_slug = "pages";
if($post -> post_parent != 0 ){
	$ancestors = array_reverse(get_post_ancestors( $post->ID ));
	foreach($ancestors as $ancestor){
		$parent_slug .= "/";
		$parent_slug .= get_post($ancestor)->post_name;
	}
}
	
$parent_slug .= "/page";
//インクルードファイルがあるかどうかを調べる
$temp_url = get_template_directory()."/".$parent_slug."-".$post->post_name.".php";
if (file_exists($temp_url)) {//ある場合はファイルインクルード
    get_template_part($parent_slug, $post->post_name);
} else {//ない場合はWPコンテンツ領域読み込み
    the_content();
}
?>


<?php endwhile; ?>
<?php else : ?>
<?php endif; ?>



</article><!-- #post-## -->
</section>
<?php get_footer(); ?>