<?php get_header(); ?>

<div class="container">

    <h2 class="hero-title">✨ Not sure what to do? ✨</h2>

    <div class="hero-action">
        <button id="main-btn" class="main-btn">Decide for me</button>
    </div>

    <div class="categories">

        <button class="category-btn" data-category="recipe">🍕 Eat</button>
        <button class="category-btn" data-category="movie">🎬 Watch</button>
        <button class="category-btn" data-category="place">🗺️ Go out</button>

        <button class="category-btn" data-category="word">📚 Learn</button>
        <button class="category-btn" data-category="game">🎮 Play</button>
        <button class="category-btn" data-category="idea">🎁 Create</button>

    </div>
    <div id="output"></div>

</div>

<!-- ABOUT секція -->
<section id="about" class="about-section">
    <div class="container">
        <h2>📖 About This Project</h2>
        <p class="about-title"><strong>WhatToDo?</strong> is a random idea generator that helps you decide what to do when you're feeling indecisive.</p>
        
        <div class="about-features">
            <div class="feature">
                <span class="feature-icon">🎲</span>
                <h3>Random Picker</h3>
                <p>Click "Decide for me" and let fate choose!</p>
            </div>
            <div class="feature">
                <span class="feature-icon">🎯</span>
                <h3>6 Categories</h3>
                <p>Food, movies, places, words, games, and creative ideas.</p>
            </div>
            <div class="feature">
                <span class="feature-icon">⚡</span>
                <h3>Instant Results</h3>
                <p>Get random suggestions instantly with one click.</p>
            </div>
        </div>
    </div>
</section>

<!-- CONTACT секція -->
<section id="contact" class="contact-section">
    <div class="container">
        <h2>📬 Contact</h2>
        <p>Have suggestions for new categories or just want to say hi?</p>
        <div class="contact-links">
            <a href="#" class="contact-btn">📧 Email</a>
            <a href="#" class="contact-btn">💬 Telegram</a>
            <a href="#" class="contact-btn">🐙 GitHub</a>
        </div>
    </div>
</section>


<?php get_footer(); ?>