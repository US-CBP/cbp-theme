import $ from 'jquery';

let applySelect = function() {
	'use strict';
	/**
	 *
	 * We currently only support selectize and select2.  If you want more select third party lib support, contribute!!!!!
	 * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
	 * Contact the Common Framework UI Group for more details or see our github page.
	 *
	 */
	let getDirty = function(idx, el) {
		if (el !== undefined && $(el).children('select').length > 0) {
			$($(el).children('select').get(0)).change((ev) => {
				let option = $(ev.currentTarget).find('option:selected').val();
				let action = (option && option.length > 0) ? 'addClass' : 'removeClass';
				$(el)[action]('is-dirty');
			});
		}
	};
	$('.selectize-field').each(getDirty);
	$('.select2-field').each(getDirty);
}

export default applySelect;
