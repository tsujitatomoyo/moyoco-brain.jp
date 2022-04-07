<?php
/*固定ページ1カラム用のテンプレート

Template Name: 2カラム用

*/
 get_header(); ?>


<div class="colomn-2_pagewrap">

<article id="post-<?php the_ID(); ?>" <?php post_class('entry-content__inner--colomn-2'); ?>>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php if(get_field('page_title')): ?>
<h1 class="entry-title"><?php the_title(); ?></h1>
<?php endif; ?>

<?php //pタグを無効（固定ページだけ）
remove_filter('the_content', 'wpautop');?>

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


<?php get_template_part( 'template-parts/snsbutton' ); ?>


  
  
</article><!-- #post-##/// entry-content__inner--colomn-2 -->

  <div class="content-extra">
    <?php get_sidebar(); ?>
  </div>
  <!--/ content-extra --> 

 </div><!--colomn-2_pagewrap-->



<?php get_footer(); ?>
