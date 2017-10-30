/* global $ */

$(document).ready(function () {
  $('.dropdown-toggle').dropdown()

      // enable tooltips
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    delay: {show: 200, hide: 0}
  })

      // enable popover
  $('[data-toggle="popover"]').popover()

      // enable masks
  $(':input').inputmask()

      // TOC
  $('.toc a').on('click', function () {
    $('.toc a.active').removeClass('active')
    $(this).addClass('active')
  })

      // progress bar
  $('#exampleProgressBar').each(function () {
    var barEl = $(this)
    var valueEl = $('#exampleProgressBarValue')
    var progress = parseInt(this.style.width, 10)
    setInterval(function () {
      barEl.css('width', ((progress += 19) % 100) + '%')
      valueEl.text(progress % 100 + '%')
    }, 1000)
  })

      //
      // Init datepicker
      //

      // enable datepickers (NOTE the 'not' method to aviod double init of range examples!)
  $('.datepicker').not('#startRange').not('#endRange').datepicker({
    autoSize: true,
    showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    onClose: function (dateStr, inst) {
          // needed for mdl textfield floading labels!
      if ($(this).parent().get(0).MaterialTextfield) {
        $(this).parent().get(0).MaterialTextfield.checkDirty()
      }
    }
  })

      // specific to our date range example
  $('#startRange.datepicker').datepicker({
    autoSize: true,
    showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    onSelect: function (dateStr) {
          // console.info(arguments);
      $('#endRange.datepicker').datepicker('option', 'minDate', dateStr)
    },
    onClose: function () {
          // needed for mdl textfield floading labels!
      if ($(this).parent().get(0).MaterialTextfield) {
        $(this).parent().get(0).MaterialTextfield.checkDirty()
      }
    }
  })

  $('#endRange.datepicker').datepicker({
    autoSize: true,
    showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    onSelect: function (dateStr) {
          // console.info(arguments);
      $('#startRange.datepicker').datepicker('option', 'maxDate', dateStr)
    },
    onClose: function () {
          // needed for mdl textfield floading labels!
      if ($(this).parent().get(0).MaterialTextfield) {
        $(this).parent().get(0).MaterialTextfield.checkDirty()
      }
    }
  })

      // make modal draggable!
  $('.modal-dialog').each(function () {
    $(this).draggable({
      handle: '.modal-header'
    })
  })

      // init select components
  $('.select2').select2({ allowEmptyOption: true })
  $('.select2-multiple').select2({ allowEmptyOption: true })
  $('.selectize').selectize({ allowClear: true })
  $('.selectize-multiple').selectize({ allowClear: true })

      // Security Footers
  var hulkIt = function (className) {
    $('footer.cbp-banner').removeClass().addClass('cbp-banner ' + className)
  }

  $('#unofficial').on('click', function () {
    hulkIt('')
  })
  $('#confidential').on('click', function () {
    hulkIt('confidential')
  })
  $('#lawSensitive').on('click', function () {
    hulkIt('law-enforcement')
  })
  $('#secret').on('click', function () {
    hulkIt('secret')
  })
  $('#topSecret').on('click', function () {
    hulkIt('top-secret')
  })

  // brand card interaction
  $('.btn-circle').on('click', function () {
    if ($(this).parents('.mdl-card').hasClass('brand-card-expand')) {
      $(this).parents('.mdl-card').removeClass('brand-card-expand')
    } else {
      $('.mdl-card').removeClass('brand-card-expand')
      $(this).parents('.mdl-card').addClass('brand-card-expand')
    }
  })
})
