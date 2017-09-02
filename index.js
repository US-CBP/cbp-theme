import 'bootstrap';
import 'material-design-lite';
import 'mdl-selectfield-module';

import applyCharLimit from './app/js/app_char_limit';
import applyDatePicker from './app/js/app_datepicker';
import applyNavigation from './app/js/app_navigation';
import applyTag from './app/js/app_tags';
import applySelect from './app/js/app_thirdparty_select';

import './app/styles/main.scss';

applyCharLimit();
applyDatePicker();
applyNavigation();
applyTag();
applySelect();