const swithButton = document.querySelector('#switch');

swithButton.addEventListener('click', toggleTheme);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme(event) {
    if (localStorage.getItem('theme') === 'theme-dark') {
        event.preventDefault();
        setTheme('theme-light');
        
    } else {
        event.preventDefault();
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark' ) {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();