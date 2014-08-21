<!doctype html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title><?php wp_title('«', true, 'right'); ?> <?php bloginfo('name'); ?></title>
    <!-- <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" /> Prod styles -->
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dev/css/style.css" type="text/css" media="screen" /> <!-- Dev styles -->
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div class="container">
    <header class="row header">
        <h1><?php bloginfo('name'); ?></h1>
        <?php get_navbar(); ?>
    </header>
    <section class="row">
