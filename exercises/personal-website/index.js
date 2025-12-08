// Functions to customize website style

// Set favorite movie genre (changes font)
function favouriteMovieGenre(genre) {
    switch(genre) {
        case 'space': document.documentElement.style.setProperty('--font', 'var(--space)'); break;
        case 'fantasy': document.documentElement.style.setProperty('--font', 'var(--fantasy)'); break;
        case 'superhero': document.documentElement.style.setProperty('--font', 'var(--superhero)'); break;
        case 'military': document.documentElement.style.setProperty('--font', 'var(--military)'); break;
        case 'romantic': document.documentElement.style.setProperty('--font', 'var(--romantic)'); break;
        case 'scary': document.documentElement.style.setProperty('--font', 'var(--scary)'); break;
        case 'cowboy': document.documentElement.style.setProperty('--font', 'var(--cowboy)'); break;
    }
}

// Set light or dark mode
function favouriteMode(mode) {
    if(mode === 'dark') {
        document.documentElement.style.setProperty('--background', '#222');
        document.documentElement.style.setProperty('--text', '#f5f5f5');
    } else {
        document.documentElement.style.setProperty('--background', '#f5f5f5');
        document.documentElement.style.setProperty('--text', '#222');
    }
}

// Set edge style (sharp, soft, round)
function favouriteEdgeStyle(style) {
    switch(style) {
        case 'sharp': document.documentElement.style.setProperty('--image-radius', '0'); break;
        case 'soft': document.documentElement.style.setProperty('--image-radius', '10px'); break;
        case 'round': document.documentElement.style.setProperty('--image-radius', '100px'); break;
    }
}

// Default settings on page load
favouriteMovieGenre('fantasy');
favouriteMode('dark');
favouriteEdgeStyle('soft');
