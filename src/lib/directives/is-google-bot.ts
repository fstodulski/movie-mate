type Options = {
  link: string;
  onClick: () => void;
};
export const isGoogleBot = (node: HTMLElement, { link, onClick }: Options) => {
  const isGoogleBot = /googlebot/i.test(navigator.userAgent);
  if (isGoogleBot) {
    node.setAttribute('href', link);
  } else {
    node.onclick = onClick;
  }
};
