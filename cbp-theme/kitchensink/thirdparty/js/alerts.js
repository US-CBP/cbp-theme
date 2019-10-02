$('.show-toasts').each(function() {
  var showToastButton = $(this);

  // get toasts and move to body
  var selector = showToastButton.attr('data-toast-target');
  var toastContainer = $(selector);
  toastContainer.hide();
  $(document.body).append(toastContainer);

  var closers = toastContainer.find('.close');
  var closersCount = closers.length;
  var closedCount = 0;
  closers.each(function() {
    $(this).on('click', function() {
      if (closersCount === ++closedCount) {
        closedCount = 0;
        setTimeout(function() {
          toastContainer.hide();
        }, 150);
      }
    });
  });

  var showToast = function(toastEl) {
    toastEl.css({right: '-100%', opacity: 0, display: 'block'});
    toastEl.animate({
      right: '0',
      opacity: 1
    }, 150, 'swing', function() {
      if (toastEl.next().length) {
        setTimeout(function() {
          showToast(toastEl.next());
        }, 1000);
      }
    });
  };

  // show the toasts on click
  showToastButton.on('click', function() {
    toastContainer.find('.toast').hide().css({right: 0, opacity: 1});
    toastContainer.toggle();
    if (toastContainer.css('display') === 'block') {
      toastContainer.css({
        position: 'fixed',
        top: '42px',
        right: '0px',
        zIndex: '10000'
      });
      closedCount = 0;
      showToast($(toastContainer.find('.toast')[0]));
    }
  });
});
