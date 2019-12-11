import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBuilding, faKey, faSignOutAlt, faEdit, faHome, faAddressBook, faCalendarCheck, faCheck, faBook, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faBuilding, faHome, faSignOutAlt, faAddressBook)
library.add(faKey, faCalendarCheck, faCheck)
library.add(faEdit, faBuilding, faBook, faIdCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false