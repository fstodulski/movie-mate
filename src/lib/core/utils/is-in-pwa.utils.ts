import { browser } from '$app/environment';

export const isInPWA = browser && window.matchMedia('(display-mode: standalone)').matches;
