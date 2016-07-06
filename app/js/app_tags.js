(function() {
	'use strict';

	$('[data-dismiss="tag"]').each(function(idx, el) {
		$(el).on('click', function(ev) {
			$(ev.currentTarget.parentElement).remove();
		});
	});
}($));
