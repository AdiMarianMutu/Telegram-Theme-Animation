window.currentTheme = 'light';

(() => {
  document.getElementById('theme-animation').addEventListener('animationend', function () {
    this.children[0].remove();
    this.classList.remove('theme-animation_do');
    document.body.style.overflow = 'auto';
  });
})();

function toggleTheme() {
  const ROOT = document.getElementsByTagName('html')[0];
  const BODY = document.body;
  const VIEW = document.getElementById('theme-animation');
  const btnThemeToggler = document.getElementById('theme-toggler');

  if (!document.getElementById('theme-animation')?.classList.contains('theme-animation_do')) {
    BODY.style.overflow = 'hidden';

    html2canvas(ROOT, {
      allowTaint: true,
      removeContainer: true,
      logging: false,
    }).then((canvas) => {
      VIEW.appendChild(canvas);

      if (window.currentTheme === 'light') {
        window.currentTheme = 'dark';
        btnThemeToggler.value = 'Light Mode';
        BODY.style.backgroundColor = 'black';
        BODY.style.color = 'white';
      } else {
        window.currentTheme = 'light';
        btnThemeToggler.value = 'Dark Mode';
        // btnThemeToggler?.style.width = '100px';
        BODY.style.backgroundColor = 'white';
        BODY.style.color = 'black';
      }

      VIEW.classList.add('theme-animation_do');
    });
  }
}
