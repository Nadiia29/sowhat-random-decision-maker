// Плавний скрол для навігації в хедері
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		const target = document.querySelector(targetId);

		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});
});

// Головна кнопка "Decide for me" - випадкова категорія
document.getElementById('main-btn').addEventListener('click', async () => {
	const output = document.getElementById('output');

	// Список всіх активних категорій
	const categories = ['recipe', 'movie', 'place', 'word', 'game', 'idea'];

	// Випадкова категорія
	const randomCategory = categories[Math.floor(Math.random() * categories.length)];

	// Емодзі для кожної категорії
	const categoryEmoji = {
		recipe: '🍕',
		movie: '🎬',
		place: '🗺️',
		word: '📖',
		game: '🎮',
		idea: '💡',
	};

	const categoryName = {
		recipe: 'recipe',
		movie: 'movie',
		place: 'place',
		word: 'word',
		game: 'game',
		idea: 'idea',
	};

	output.innerHTML = `<div class="loading">🤔 Thinking... ${categoryEmoji[randomCategory]} Looking for a ${categoryName[randomCategory]}...</div>`;

	const res = await fetch(wtdData.ajaxUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			action: 'get_content_by_category',
			category: randomCategory,
		}),
	});

	const data = await res.json();

	if (data.success) {
		const item = data.data;

		if (item.type === 'recipe') {
			output.innerHTML = displayRecipe(item);
		} else if (item.type === 'movie') {
			output.innerHTML = displayMovie(item);
		} else if (item.type === 'place') {
			output.innerHTML = displayPlace(item);
		} else if (item.type === 'word') {
			output.innerHTML = displayWord(item);
		} else if (item.type === 'game') {
			output.innerHTML = displayGame(item);
		} else if (item.type === 'idea') {
			output.innerHTML = displayIdea(item);
		}
	} else {
		output.innerHTML = `<div class="error">😢 No ${randomCategory} found. Please add more content!</div>`;
	}
});

// ===== КНОПКИ КАТЕГОРІЙ =====
document.querySelectorAll('.category-btn').forEach((btn) => {
	btn.addEventListener('click', async () => {
		const category = btn.dataset.category;
		const output = document.getElementById('output');

		output.innerHTML = '<div class="loading">🤔 Looking for something great...</div>';

		const res = await fetch(wtdData.ajaxUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				action: 'get_content_by_category',
				category: category,
			}),
		});

		const data = await res.json();

		if (data.success) {
			const item = data.data;

			if (item.type === 'recipe') {
				output.innerHTML = displayRecipe(item);
			} else if (item.type === 'movie') {
				output.innerHTML = displayMovie(item);
			} else if (item.type === 'place') {
				output.innerHTML = displayPlace(item);
			} else if (item.type === 'word') {
				output.innerHTML = displayWord(item);
			} else if (item.type === 'game') {
				output.innerHTML = displayGame(item);
			} else if (item.type === 'idea') {
				output.innerHTML = displayIdea(item);
			}
		} else {
			output.innerHTML = `<div class="error">😢 ${
				data.data || 'Nothing found for this category'
			}</div>`;
		}
	});
});

// Функція для відображення рецепту
function displayRecipe(recipe) {
	return `
        <div class="result-card">
            <h2>🍕 ${recipe.title}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Time:</strong> ${recipe.time} min</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <button onclick="location.reload()" class="try-again">Try another →</button>
        </div>
    `;
}

function displayMovie(movie) {
	// Рейтинг у зірках
	const fullStars = Math.floor(movie.rating);
	const emptyStars = 10 - fullStars;
	const stars = '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);

	return `
        <div class="result-card">
            <h2>🎬 ${movie.title}</h2>
            <div class="movie-details">
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Genre:</strong> ${movie.genre || 'Various'}</p>
                <p><strong>Duration:</strong> ${movie.duration} min</p>
                <p><strong>Rating:</strong> ${movie.rating}/10 ${stars}</p>
                <p><strong>Where to watch:</strong> ${movie.where_to_watch || 'Check online'}</p>
            </div>
            <button onclick="location.reload()" class="try-again">Try another →</button>
        </div>
    `;
}

// Функція для відображення місця
function displayPlace(place) {
	// Рейтинг у зірках
	const fullStars = Math.floor(place.rating);
	const emptyStars = 5 - fullStars;
	const stars = '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);

	// Емодзі для типу місця
	const typeEmoji = {
		Cafe: '☕',
		Park: '🌳',
		Museum: '🏛️',
		Cinema: '🎬',
		Restaurant: '🍽️',
	};
	const emoji = typeEmoji[place.place_type] || '📍';

	// Емодзі для ціни
	const priceEmoji = {
		$: '💚',
		$$: '💛💛',
		$$$: '❤️❤️❤️',
		Free: '🎁',
	};
	const priceIcon = priceEmoji[place.price_level] || '💰';

	return `
        <div class="result-card">
            <h2>${emoji} ${place.title}</h2>
            <div class="place-details">
                <p><strong>Type:</strong> ${place.place_type || 'Various'}</p>
                <p><strong>Address:</strong> ${place.address || 'Check map'}</p>
                <p><strong>Price:</strong> ${place.price_level || 'N/A'} ${priceIcon}</p>
                <p><strong>Rating:</strong> ${place.rating}/5 ${stars}</p>
                <p><strong>Opening Hours:</strong> ${place.opening_hours || 'Contact for info'}</p>
                ${
					place.maps_link && place.maps_link !== '#'
						? `<p><strong>Map:</strong> <a href="${place.maps_link}" target="_blank">Open in Google Maps →</a></p>`
						: ''
				}
            </div>
            <button onclick="location.reload()" class="try-again">Try another →</button>
        </div>
    `;
}

// Функція для відображення слова
function displayWord(word) {
	// Емодзі для рівня складності
	const difficultyEmoji = {
		A1: '🌱',
		A2: '🌿',
		B1: '🌳',
		B2: '🏔️',
		C1: '🎓',
	};
	const levelEmoji = difficultyEmoji[word.difficulty_level] || '📚';

	// Емодзі для частини мови
	const speechEmoji = {
		Noun: '📖',
		Verb: '⚡',
		Adjective: '🎨',
		Adverb: '✨',
	};
	const speechIcon = speechEmoji[word.part_of_speech] || '📝';

	return `
        <div class="result-card">
            <h2>📖 ${word.title}</h2>
            <div class="word-details">
                <p><strong>Translation:</strong> ${word.translation || '—'}</p>
                <p><strong>Part of Speech:</strong> ${speechIcon} ${
		word.part_of_speech || 'Various'
	}</p>
                <p><strong>Difficulty:</strong> ${levelEmoji} ${
		word.difficulty_level || 'Not specified'
	}</p>
                ${
					word.pronunciation
						? `<p><strong>Pronunciation:</strong> ${word.pronunciation}</p>`
						: ''
				}
                ${
					word.example_sentence
						? `<p><strong>Example:</strong> "${word.example_sentence}"</p>`
						: ''
				}
            </div>
            <button onclick="location.reload()" class="try-again">Learn another →</button>
        </div>
    `;
}

// Функція для відображення гри
function displayGame(game) {
	// Рейтинг у зірках
	const fullStars = Math.floor(game.rating);
	const emptyStars = 5 - fullStars;
	const stars = '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);

	// Емодзі для платформи
	const platformEmoji = {
		PC: '🖥️',
		PlayStation: '🎮',
		Xbox: '💚',
		'Nintendo Switch': '🔴',
		Mobile: '📱',
	};

	// Емодзі для настрою
	const moodEmoji = {
		Relaxing: '😌',
		Challenging: '💪',
		'Fast-paced': '⚡',
		'Story-rich': '📖',
		Casual: '🎲',
	};

	// Емодзі для кількості гравців
	const playersEmoji = {
		'Single-player': '👤',
		Multiplayer: '👥',
		'Co-op': '🤝',
		Online: '🌐',
	};

	const platformIcon = platformEmoji[game.platform] || '🎮';
	const moodIcon = moodEmoji[game.mood] || '🎯';
	const playersIcon = playersEmoji[game.players] || '👾';

	return `
        <div class="result-card">
            <h2>🎮 ${game.title}</h2>
            <div class="game-details">
                <p><strong>Platform:</strong> ${platformIcon} ${game.platform || 'Various'}</p>
                <p><strong>Genre:</strong> ${game.genre || 'Various'}</p>
                <p><strong>Mood:</strong> ${moodIcon} ${game.mood || 'Any'}</p>
                <p><strong>Players:</strong> ${playersIcon} ${game.players || 'Single-player'}</p>
                <p><strong>Time per session:</strong> ⏱️ ${game.time_to_play || '?'} min</p>
                <p><strong>Rating:</strong> ${game.rating}/5 ${stars}</p>
                <p><strong>Where to play:</strong> 🛒 ${game.where_to_play || 'Check online'}</p>
            </div>
            <button onclick="location.reload()" class="try-again">Play another →</button>
        </div>
    `;
}

// Функція для відображення ідеї
function displayIdea(idea) {
	// Емодзі для категорії
	const categoryEmoji = {
		Drawing: '🎨',
		Writing: '✍️',
		DIY: '🔨',
		Photography: '📷',
		Music: '🎵',
		Cooking: '🍳',
		'Digital Art': '💻',
	};
	const categoryIcon = categoryEmoji[idea.category] || '💡';

	// Емодзі для складності
	const difficultyEmoji = {
		Easy: '🌱',
		Medium: '🌿',
		Hard: '🏔️',
	};
	const difficultyIcon = difficultyEmoji[idea.difficulty] || '⚙️';

	// Емодзі для настрою
	const moodEmoji = {
		Relaxing: '😌',
		Energizing: '⚡',
		Focused: '🎯',
		Fun: '😄',
	};
	const moodIcon = moodEmoji[idea.mood] || '✨';

	return `
        <div class="result-card">
            <h2>${categoryIcon} ${idea.title}</h2>
            <div class="idea-details">
                <p><strong>Category:</strong> ${idea.category || 'Creative'}</p>
                <p><strong>Difficulty:</strong> ${difficultyIcon} ${idea.difficulty || 'Medium'}</p>
                <p><strong>Time needed:</strong> ⏱️ ${idea.time_needed || '?'} min</p>
                <p><strong>Mood:</strong> ${moodIcon} ${idea.mood || 'Creative'}</p>
                ${idea.materials ? `<p><strong>Materials:</strong> 📦 ${idea.materials}</p>` : ''}
                ${
					idea.description
						? `<p><strong>Description:</strong> ${idea.description}</p>`
						: ''
				}
                ${
					idea.tutorial_link && idea.tutorial_link !== '#'
						? `<p><strong>🎥 Tutorial:</strong> <a href="${idea.tutorial_link}" target="_blank">Watch & Learn →</a></p>`
						: ''
				}
            </div>
            <button onclick="location.reload()" class="try-again">Another idea →</button>
        </div>
    `;
}
