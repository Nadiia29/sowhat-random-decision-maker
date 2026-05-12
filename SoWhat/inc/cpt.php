<?php

register_post_type('recipe', [
    'label' => 'Recipes',
    'public' => true,
    'has_archive' => true,
    'supports' => ['title', 'editor', 'thumbnail'],
    'show_in_rest' => true,
]);