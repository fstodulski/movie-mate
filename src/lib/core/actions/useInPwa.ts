export const inPWA = (node: HTMLElement) => {
  if (window) {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      node.style.display = 'flex';
      node.classList.add('pwa');
    } else {
      node.classList.remove('pwa');
      node.style.display = 'none';
    }
  }

  return {
    destroy() {}
  };
};
