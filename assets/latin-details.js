document.addEventListener('DOMContentLoaded', function() {
  var details = document.querySelectorAll('details[style]');
  for (var i = 0; i < details.length; i++) {
    var el = details[i];
    if (el.getAttribute('style').indexOf('background: #f8f9fa') !== -1) {
      el.classList.add('latin-detail');
      el.removeAttribute('style');
    }
  }

  var summaries = document.querySelectorAll('summary[style]');
  for (var j = 0; j < summaries.length; j++) {
    var s = summaries[j];
    if (s.getAttribute('style').indexOf('font-weight: bold') !== -1) {
      s.classList.add('latin-detail-summary');
      s.removeAttribute('style');
    }
  }

  var paragraphs = document.querySelectorAll('p[style]');
  for (var k = 0; k < paragraphs.length; k++) {
    var p = paragraphs[k];
    if (p.getAttribute('style').indexOf('margin-top: 10px') !== -1) {
      p.classList.add('latin-detail-body');
      p.removeAttribute('style');
    }
  }
});
