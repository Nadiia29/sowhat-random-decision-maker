<?php
// Реєструємо обидва AJAX екшени
add_action('wp_ajax_get_random_recipe', 'get_random_recipe_callback');
add_action('wp_ajax_nopriv_get_random_recipe', 'get_random_recipe_callback');

add_action('wp_ajax_get_content_by_category', 'get_content_by_category_callback');
add_action('wp_ajax_nopriv_get_content_by_category', 'get_content_by_category_callback');

// Функція для випадкового рецепту
function get_random_recipe_callback() {
    $query = new WP_Query([
        'post_type' => 'recipe',
        'posts_per_page' => 1,
        'orderby' => 'rand',
        'post_status' => 'publish'
    ]);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            
            wp_send_json_success([
                'type' => 'recipe',
                'title' => get_the_title(),
                'ingredients' => get_field('ingredients'),
                'time' => get_field('time'),
                'difficulty' => get_field('difficulty')
            ]);
        }
    } else {
        wp_send_json_error('No recipe found');
    }
    
    wp_reset_postdata();
}

// Функція для категорій
function get_content_by_category_callback() {
    $category = isset($_POST['category']) ? sanitize_text_field($_POST['category']) : '';
    
    // ===== РЕЦЕПТИ =====
    if ($category === 'recipe') {
        $query = new WP_Query([
            'post_type' => 'recipe',  
            'posts_per_page' => 1,
            'orderby' => 'rand',
            'post_status' => 'publish'
        ]);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                
                wp_send_json_success([
                    'type' => 'recipe',
                    'title' => get_the_title(),
                    'ingredients' => get_field('ingredients'),
                    'time' => get_field('time'),
                    'difficulty' => get_field('difficulty')
                ]);
            }
        } else {
            wp_send_json_error('No recipes found. Please add at least one published recipe.');
        }
    }
    
    // ===== ФІЛЬМИ =====
    if ($category === 'movie') {
        $query = new WP_Query([
            'post_type' => 'movie',
            'posts_per_page' => 1,
            'orderby' => 'rand',
            'post_status' => 'publish'
        ]);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                
                wp_send_json_success([
                    'type' => 'movie',
                    'title' => get_the_title(),
                    'director' => get_field('director'),
                    'year' => get_field('year'),
                    'rating' => get_field('rating'),
                    'where_to_watch' => get_field('where_to_watch'),
                    'duration' => get_field('duration'),
                    'genre' => get_field('genre')
                ]);
            }
        } else {
            wp_send_json_error('No movies found. Please add some movies in admin panel.');
        }
    }

    // ===== МІСЦЯ =====
    if ($category === 'place') {
        $query = new WP_Query([
            'post_type' => 'place',
            'posts_per_page' => 1,
            'orderby' => 'rand',
            'post_status' => 'publish'
        ]);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                
                wp_send_json_success([
                    'type' => 'place',
                    'title' => get_the_title(),
                    'address' => get_field('address'),
                    'place_type' => get_field('place_type'),
                    'price_level' => get_field('price_level'),
                    'rating' => get_field('rating'),
                    'opening_hours' => get_field('opening_hours'),
                    'maps_link' => get_field('maps_link')
                ]);
            }
        } else {
            wp_send_json_error('No places found. Please add some places in admin panel.');
        }
    }

    // ===== СЛОВА =====
    if ($category === 'word') {
        $query = new WP_Query([
            'post_type' => 'word',
            'posts_per_page' => 1,
            'orderby' => 'rand',
            'post_status' => 'publish'
        ]);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                
                wp_send_json_success([
                    'type' => 'word',
                    'title' => get_the_title(),
                    'translation' => get_field('translation'),
                    'example_sentence' => get_field('example_sentence'),
                    'part_of_speech' => get_field('part_of_speech'),
                    'difficulty_level' => get_field('difficulty_level'),
                    'pronunciation' => get_field('pronunciation')
                ]);
            }
        } else {
            wp_send_json_error('No words found. Please add some words in admin panel.');
        }
    }

    // ===== ІГРИ =====
    if ($category === 'game') {
        $query = new WP_Query([
            'post_type' => 'game',
            'posts_per_page' => 1,
            'orderby' => 'rand',
            'post_status' => 'publish'
        ]);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                
                wp_send_json_success([
                    'type' => 'game',
                    'title' => get_the_title(),
                    'platform' => get_field('platform'),
                    'genre' => get_field('genre'),
                    'rating' => get_field('rating'),
                    'time_to_play' => get_field('time_to_play'),
                    'players' => get_field('players'),
                    'mood' => get_field('mood'),
                    'where_to_play' => get_field('where_to_play')
                ]);
            }
        } else {
            wp_send_json_error('No games found. Please add some games in admin panel.');
        }
    }

        // ===== ІДЕЇ ДЛЯ ТВОРЧОСТІ =====
    if ($category === 'idea') {
        $query = new WP_Query([
            'post_type' => 'idea',
            'posts_per_page' => 1,
            'orderby' => 'rand',
            'post_status' => 'publish'
        ]);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                
                wp_send_json_success([
                    'type' => 'idea',
                    'title' => get_the_title(),
                    'category' => get_field('category'),
                    'difficulty' => get_field('difficulty'),
                    'time_needed' => get_field('time_needed'),
                    'materials' => get_field('materials'),
                    'description' => get_field('description'),
                    'tutorial_link' => get_field('tutorial_link'),
                    'mood' => get_field('mood')
                ]);
            }
        } else {
            wp_send_json_error('No ideas found. Please add some ideas in admin panel.');
        }
    }
    
    // Якщо категорія не знайдена
    wp_send_json_error('Category "' . $category . '" is not available yet. Coming soon!');
    
    wp_reset_postdata();
}