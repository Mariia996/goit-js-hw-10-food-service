const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkbox = document.getElementById('theme-switch-toggle');

checkbox.addEventListener('change', onSwitchThemeHandler);

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'DARK') {
    bodyRef.classList.add(theme.DARK);
    checkbox.checked = true;
}

function onSwitchThemeHandler(e) {
    if (e.target.checked === true) {
        bodyRef.classList.add(theme.DARK);
        bodyRef.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', 'DARK');

    } else {
        bodyRef.classList.add(theme.LIGHT);
        bodyRef.classList.remove(theme.DARK);
        localStorage.setItem('theme', 'LIGHT');
    }
}



