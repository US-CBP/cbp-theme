import { applyDatePicker } from './js/app-datepicker'
import { applyCharLimit } from './js/app-char-limit'
import { applyTags } from './js/app-tags'
import { applyThirdPartySelect } from './js/app-thirdparty-select'
import { setupCBPHeader } from './js/app-navigation'

export class CBPTheme {
  setupCBPHeader () {
    return setupCBPHeader()
  }
  applyDatePicker () {
    return applyDatePicker()
  }
  applyCharLimit () {
    return applyCharLimit()
  }
  applyTags () {
    return applyTags()
  }
  applyThirdPartySelect () {
    return applyThirdPartySelect()
  }
}
