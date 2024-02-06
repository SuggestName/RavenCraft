function initializeThemeToggle() {
    toggleTheme();

    attachThemeToggleEventListeners();
}

function attachThemeToggleEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const bodyClass = document.body.classList;
    bodyClass.toggle('dark-mode');
    bodyClass.toggle('light-mode');
    const theme = bodyClass.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
}

function updateToggleButton(theme) {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    if (theme === 'dark-mode') {
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
    }
}