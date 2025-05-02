export default function initTheme() {
  window.__onThemeChange = function () {};

  function setTheme(newTheme) {
    window.__theme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    window?.__onThemeChange(newTheme);
  }

  var darkMediaQuery = window.matchMedia('prefers-color-scheme: dark');

  darkMediaQuery.addEventListener('change', function (e) {
    setTheme(e.matches ? 'dark' : 'light');
  });

  // initial theme
  var initialTheme = 'system';
  try {
    initialTheme = localStorage.getItem('theme') || 'system';
  } catch (e) {
    console.error('Error reading localStorage', e);
  }
  setTheme(initialTheme);

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);
  };
}
