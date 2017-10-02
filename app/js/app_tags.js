import $ from 'jquery';

let applyTag = function() {
	/**
	 *
	 * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
	 * Contact the Common Framework UI Group for more details or see our github page.
	 *
	 */
	'use strict';

	$('[data-dismiss="tag"]').each(function(idx, el) {
		$(el).on('click', function(ev) {
			$(ev.currentTarget.parentElement).remove();
		});
	});
}

export default applyTag;