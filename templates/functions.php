<?php

function get_navbar() {
	require('navbar.php');
}

add_theme_support('post-thumbnails'); // поддержка миниатюр
set_post_thumbnail_size(120, 90, false);

function smb_excerpt_length($length) {
    return 10;
}
add_filter('excerpt_length', 'smb_excerpt_length');

function smb_excerpt_more( $more ) {
	return '...';
}
add_filter('excerpt_more', 'smb_excerpt_more');

function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

add_filter('the_content', 'filter_ptags_on_images');

?>