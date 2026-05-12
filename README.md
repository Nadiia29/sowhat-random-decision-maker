# 🤔 WhatToDo? - Random Idea Generator

**WhatToDo?** is an interactive web application that helps you decide what to do when you're feeling indecisive. Just click a category or let fate decide with the "Decide for me" button!

🔗 **Live Demo:** [Coming Soon]  
📂 **GitHub Repository:** [Your link here]

---

## ✨ Features

- 🎲 **Random decision maker** - one click, random category, random suggestion
- 🍕 **6 categories** - Eat, Watch, Go out, Learn, Play, Create
- ⚡ **Instant results** - AJAX-powered suggestions without page reload
- 📱 **Fully responsive** - works perfectly on mobile, tablet, and desktop
- 🎨 **Modern glassmorphism design** - beautiful gradient backgrounds and blur effects

---

## 🚀 Live Preview

| Category | Icon | Description |
|:---|:---:|:---|
| **Eat** | 🍕 | Random recipe suggestions with ingredients, time, and difficulty |
| **Watch** | 🎬 | Random movie recommendations with director, year, rating, and where to watch |
| **Go out** | 🗺️ | Random places to visit - cafes, parks, museums, cinemas |
| **Learn** | 📚 | Random words to learn with translation, examples, and pronunciation |
| **Play** | 🎮 | Random game recommendations - platform, genre, mood, and playtime |
| **Create** | 🎁 | Random creative ideas - drawing, writing, DIY, photography, and more |

---

## 🛠️ Tech Stack

| Technology | Usage |
|:---|:---|
| **WordPress** | CMS and backend |
| **PHP** | Custom theme development, AJAX handlers |
| **JavaScript (ES6+)** | Frontend logic, async API calls |
| **CSS3** | Modern styling, animations, responsive design |
| **ACF (Advanced Custom Fields)** | Custom fields for all post types |
| **CPT UI** | Custom Post Types management |
| **WordPress REST API** | AJAX communication |

---

## 📂 Project Structure
SoWhat/
├── assets/
│ ├── css/
│ │ └── main.css
│ └── js/
│ └── main.js
├── inc/
│ ├── ajax.php
│ ├── enqueue.php
│ └── helpers.php
├── front-page.php
├── header.php
├── footer.php
├── functions.php
├── style.css
└── screenshot.png

---


## 🧠 How It Works

1. User clicks a category button (or "Decide for me")
2. JavaScript sends an AJAX request to WordPress admin-ajax.php
3. WordPress queries a random post from the corresponding Custom Post Type
4. The response returns the post data (title + custom fields)
5. JavaScript dynamically renders a beautiful result card without page reload

**"Decide for me" logic:** Randomly selects one of the 6 categories, then fetches a random item from that category — pure serendipity!

---
## 🎯 Custom Post Types

| CPT | Fields (via ACF) |
|:---|:---|
| **recipe** | ingredients, time, difficulty |
| **movie** | director, year, rating, where_to_watch, duration, genre |
| **place** | address, place_type, price_level, rating, opening_hours, maps_link |
| **word** | translation, example_sentence, part_of_speech, difficulty_level, pronunciation |
| **game** | platform, genre, rating, time_to_play, players, mood, where_to_play |
| **idea** | category, difficulty, time_needed, materials, description, tutorial_link, mood |

---


## 🏗️ Installation

### Prerequisites
- [Local WP](https://localwp.com/) or any local WordPress environment
- WordPress 6.0+
- PHP 7.4+

### Steps

1. **Clone the repository**
git clone https://github.com/Nadiia29/sowhat-random-decision-maker
cd SoWhat
2. Move to WordPress themes folder mv SoWhat /wp-content/themes/
3. Install required plugins (in WordPress admin) CPT UI  ACF
4. Create Custom Post Types via CPT UI: recipe, movie, place, word, game, idea
5. Create ACF Field Groups for each CPT (see table above)
6. Activate the theme in Appearance → Themes → SoWhat
7. Add content to each Custom Post Type (at least 2-3 items per category)
8. Visit your site and start exploring! 🎲

### 📸 Screenshots

Hero Section

Categories

Result Example

### 🎨 Design Highlights

* Glassmorphism - translucent elements with backdrop-filter: blur()
* Gradient backgrounds - vibrant purple-to-blue gradient
* Smooth animations - fade-in effects on results (@keyframes fadeInUp)
* Hover interactions - buttons lift and glow on hover
* Fully responsive - grid changes on mobile (3 → 2 → 1 column)

### 🔮 Future Improvements
1. Add 50+ items per category
2. User submissions for new ideas
3. Rating system for suggestions
4. Dark/light theme toggle
5. PWA support for offline access
6. Deploy to production hosting

### 👩‍💻 Author
Nadiia Poshtova - Frontend Developer
* Portfolio: https://github.com/Nadiia29/my-portfolio
* WordPress Portfolio: https://github.com/Nadiia29/wordpress-portfolio
* GitHub: https://github.com/Nadiia29
* LinkedIn: https://www.linkedin.com/in/nadiia-poshtova-73b59224b/
* Telegram: @NanaX29

### 📝 License
This project is licensed under the MIT License - feel free to use, modify, and distribute.

### 🙏 Acknowledgments
* WordPress REST API
* Advanced Custom Fields
* CPT UI
* Local WP for local development

⭐️ Show Your Support
If you find this project useful, please give it a star on GitHub! ⭐️
