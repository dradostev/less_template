<?php get_header(); ?>
<article class="column--desktop--24">
	<h1><?php the_title(); ?></h1>
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
        <?php the_content(); ?>
    <?php endwhile; endif; ?>
</article>
 <?php get_sidebar(); ?>
<?php get_footer(); ?>