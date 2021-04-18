import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');

const notify = text => {
  const options = {
    text,
    styling: 'brighttheme',
    icons: 'brighttheme',
    animation: 'fade',
    animateSpeed: 'slow',
    shadow: true,
    delay: 2000,
    width: '330px',
    minHeight: '16px',
    sticker: false,
    maxTextHeight: null,
  };
  error(options);
};

export default notify;
