<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <h1><?php the_title(); ?></h1>

    <div class="recipe">
        <p><strong>Ingredients:</strong> <?php the_field('ingredients'); ?></p>
        <p><strong>Time:</strong> <?php the_field('time'); ?> min</p>
        <p><strong>Difficulty:</strong> <?php the_field('difficulty'); ?></p>
    </div>

<?php endwhile; endif; ?>

<?php get_footer(); ?>