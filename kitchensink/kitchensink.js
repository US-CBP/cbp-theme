/* global $ */

$(document).ready(function () {
  window.cbpThemeInputMask.setupInputMasks()
  window.cbpTheme.applyDatePicker()
  window.cbpTheme.applyCharLimit()
  window.cbpTheme.applyTags()
  window.cbpTheme.applyThirdPartySelect()

  $('.dropdown-toggle').dropdown()

      // enable tooltips
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    delay: {show: 200, hide: 0}
  })

      // enable popover
  $('[data-toggle="popover"]').popover()

      // enable masks
  $('[data-inputmask]').inputmask()

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
})

// Form Input File Type #1
// Enable the <input type="file"> functionality
/* By Osvaldas Valutis, www.osvaldas.info / Available for use under the MIT License
*/

;(function ($, _window, _document) {
       $('.inputfile').each(function () {
         var $input = $(this)
         var $label = $input.next('label')
         var labelVal = $label.html()

     // changes the label text to show the name of the selected file
         $input.on('change', function (e) {
           var fileName = ''

           if (this.files && this.files.length > 1) { fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length) } else if (e.target.value) { fileName = e.target.value.split('\\').pop() }

           if (fileName) { $label.find('span').html(fileName) } else { $label.html(labelVal) }
         })

      // Firefox bug fix
      // Applies and removes necessary accessiblity styling for focus events
         $input
         .on('focus', function () { $input.addClass('has-focus') })
         .on('blur', function () { $input.removeClass('has-focus') })
       })
     })($, window, document)

     // Form Input File Type #2
     // trigger upload on space & enter
     // = standard button functionality
$('#buttonlabel span[role=button]').bind('keypress keyup', function (e) {
  if (e.which === 32 || e.which === 13) {
    e.preventDefault()
    $('#fileupload').click()
  }
})

     // return chosen filename to additional input
$('#fileupload').change(function (e) {
  var filename = $('#fileupload').val().split('\\').pop()
  $('#filename').val(filename)
  $('#filename').attr('placeholder', filename)
  $('#filename').focus()
})
