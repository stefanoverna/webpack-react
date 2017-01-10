import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';

addLocaleData([...en, ...it]);

require('../assets/stylesheets/index.sass');
require('./init');

