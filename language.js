// Keep the visitor at the same section when switching language.
document.querySelectorAll('.language-switch a').forEach(link => {
  const base = link.getAttribute('href');
  const update = () => { link.setAttribute('href', base + window.location.hash); };
  update();
  window.addEventListener('hashchange', update);
});
