<?php

function wtd_enqueue_assets() {
    wp_enqueue_style(
        'main-style',
        get_template_directory_uri() . '/assets/css/main.css',
        [],
        '1.0'
    );

    wp_enqueue_script(
        'main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0',
        true
    );

    // передаємо AJAX URL в JS
    wp_localize_script('main-js', 'wtdData', [
        'ajaxUrl' => admin_url('admin-ajax.php')
    ]);
}

add_action('wp_enqueue_scripts', 'wtd_enqueue_assets');