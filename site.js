(function () {
  var url = (typeof CHECKOUT_URL === 'string' ? CHECKOUT_URL : '').trim();
  var buttons = document.querySelectorAll('[data-buy]');

  function noteFor(btn) {
    var wrap = btn.closest('.buy-wrap') || btn.parentElement;
    var note = wrap.querySelector('.checkout-note');
    if (!note) {
      note = document.createElement('p');
      note.className = 'checkout-note';
      wrap.appendChild(note);
    }
    return note;
  }

  buttons.forEach(function (btn) {
    if (url) {
      if (btn.tagName === 'A') btn.setAttribute('href', url);
      btn.addEventListener('click', function () {
        if (btn.tagName !== 'A') window.location.href = url;
      });
      return;
    }
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var note = noteFor(btn);
      note.hidden = false;
      note.textContent = 'Checkout is being wired';
      note.setAttribute('role', 'status');
    });
  });
})();
