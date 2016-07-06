/* enable noui sliders */
    $('[data-nouislider]').each(function () {
        var el = $(this);
        var opts = {
            range: {
                min: 0,
                max: 100
            },
            connect: 'lower'
        };

        if (el.attr('data-min')) {
            opts.range.min = parseInt(el.attr('data-min'), 10);
        }
        if (el.attr('data-max')) {
            opts.range.max = parseInt(el.attr('data-max'), 10);
        }
        if (el.attr('data-start')) {
            opts.start = parseInt(el.attr('data-start'), 10);
        }
        if (el.attr('data-start-b')) {
            opts.start = [parseInt(el.attr('data-start'), 10),parseInt(el.attr('data-start-b'), 10)] ;
            opts.connect = true;
            opts.behaviour = 'drag';
        }
        if (el.attr('data-step')) {
            opts.step = parseInt(el.attr('data-step'), 10);
        }

        el.noUiSlider(opts);

        if (el.attr('data-pips')) {
            el.noUiSlider_pips({
                mode: 'count',
                values: 6,
                density: 10
            });
        }

        if (el.attr('data-slider-tooltip')) {
            el.Link('lower').to('-inline-<div class="tooltip fade in top" style="top: -39px; transform: translateX(-50%); margin-left: 6px; display: inline-block; position: relative; width: auto;"></div>', function ( value ) {
                $(this).html(
                    '<div class="tooltip-inner">' + parseInt(value, 10) + '</div>' +
                    '<div class="tooltip-arrow"></div>'
                );
            });
        }

        if (el.attr('data-link-lower')) {
            el.Link('lower').to($(el.attr('data-link-lower')));
        }
        if (el.attr('data-link-upper')) {
            el.Link('upper').to($(el.attr('data-link-upper')));
        }
    });
