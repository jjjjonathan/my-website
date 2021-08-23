const listenForDarkMode = () => {
  const toggler = document.querySelector('#dark-mode-toggle');

  const handler = (event) => {
    const htmlTag = document.querySelector('html');

    if (event.target.checked === true) {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  };

  toggler.addEventListener('click', handler);
};

document.addEventListener('DOMContentLoaded', listenForDarkMode);
