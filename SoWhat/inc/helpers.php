<?php
function get_random_recipe() {
    $query = new WP_Query([
        'post_type' => 'recipe',
        'posts_per_page' => 1,
        'orderby' => 'rand'
    ]);
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            
            return [
                'title' => get_the_title(),
                'ingredients' => get_field('ingredients'),
                'time' => get_field('time'),
                'difficulty' => get_field('difficulty'),
                'link' => get_permalink()
            ];
        }
    }
    
    wp_reset_postdata();
    return null;
}