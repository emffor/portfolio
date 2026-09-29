// Runs before the first paint, independently of React hydration.
// The default (no attribute) always leaves the server-rendered content visible.
export const HOME_ASSEMBLY_SCRIPT = `
  (function() {
    if (window.location.pathname !== '/') return;

    var key = 'portfolio:home-assembly';
    try {
      if (sessionStorage.getItem(key)) return;
    } catch (error) {
      // If storage is unavailable, prefer immediate content over repeated motion.
      return;
    }

    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) return;
    if (window.location.hash && window.location.hash !== '#inicio') return;

    try {
      sessionStorage.setItem(key, 'seen');
    } catch (error) {
      return;
    }

    var root = document.documentElement;
    var timer;

    function finish() {
      root.removeAttribute('data-home-assembly');
      window.clearTimeout(timer);
      document.removeEventListener('DOMContentLoaded', armFallback);
      document.removeEventListener('animationend', onEnd);
      document.removeEventListener('pointerdown', finish);
      document.removeEventListener('focusin', finish);
      window.removeEventListener('pagehide', finish);
      window.removeEventListener('popstate', finish);
      motion.removeEventListener('change', finish);
    }

    function onEnd(event) {
      if (event.animationName === 'interface-assembly' &&
          event.target.getAttribute('data-assembly') === 'socials') finish();
    }

    function armFallback() {
      // Safety net if animationend is skipped (background tab, interrupted CSS).
      timer = window.setTimeout(finish, 1600);
    }

    document.addEventListener('animationend', onEnd);
    document.addEventListener('pointerdown', finish, { passive: true });
    document.addEventListener('focusin', finish);
    window.addEventListener('pagehide', finish);
    window.addEventListener('popstate', finish);
    motion.addEventListener('change', finish);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', armFallback, { once: true });
    } else {
      armFallback();
    }
    root.setAttribute('data-home-assembly', '');
  })();
`;
