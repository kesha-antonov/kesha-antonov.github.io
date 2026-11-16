// Applies the saved theme before first paint; without a saved choice the OS theme wins.
// Kept as a string so astro.config.mjs can hash the exact text for the CSP.
export const THEME_INIT = "try { const t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t } catch (e) {}"
