const listenForDarkMode = () => {
  const toggler = document.querySelector('#dark-mode-toggle');

  const handler = (event) => {
    const htmlTag = document.querySelector('html');

    if (toggler.dataset.toggle === 'off') {
      htmlTag.classList.add('dark');

      toggler.dataset.toggle = 'on';
      toggler.classList.remove('bi-toggle-off');
      toggler.classList.add('bi-toggle-on');
    } else {
      htmlTag.classList.remove('dark');

      toggler.dataset.toggle = 'off';
      toggler.classList.remove('bi-toggle-on');
      toggler.classList.add('bi-toggle-off');
    }
  };

  toggler.addEventListener('click', handler);
};

document.addEventListener('DOMContentLoaded', listenForDarkMode);
