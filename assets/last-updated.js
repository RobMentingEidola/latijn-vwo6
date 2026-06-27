document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById('last-updated');
  if (!el) return;
  var raw = document.lastModified;
  var date = raw ? new Date(raw) : new Date();
  var formatted = new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
  el.textContent = formatted;
});
