document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById('last-updated');
  if (!el) return;

  // Prefer an explicit page date; fall back to document metadata.
  var explicit = el.getAttribute('data-last-updated');
  var raw = explicit && explicit.trim() ? explicit : document.lastModified;
  var date = raw ? new Date(raw) : new Date();

  if (isNaN(date.getTime())) {
    el.textContent = explicit && explicit.trim() ? explicit : 'onbekend';
    return;
  }

  var formatted = new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
  el.textContent = formatted;
});