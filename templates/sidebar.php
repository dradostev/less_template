<aside class="column--desktop--8 column--laptop--8 column--tablet--32 column--phone--32">
	<nav class="nav--vertical navstack">
		<ul>
	        <?php wp_list_pages('title_li='); ?>
	    </ul>
	</nav>
	<h2>Last news</h2>
	<?php query_posts($query_string.'&showposts=5'); if(have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	<article>
		<a class="float--left" href="<?php the_permalink(); ?>">
			<?php the_post_thumbnail(); ?>
		</a>
	    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
	    <p><?php the_excerpt(); ?></p>
	    <i><?php the_time('j F Y') ?></i>
	    <a class="float--right" href="<?php the_permalink(); ?>">Read more »</a>
	</article>
	<?php endwhile; ?>
    <?php endif; ?>
</aside>

<!-- &cat=2 - filter -->