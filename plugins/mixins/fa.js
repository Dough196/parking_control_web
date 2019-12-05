import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBuilding, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faBuilding)
library.add(faKey, faBuilding)
library.add(faHome, faBuilding)
library.add(faBuilding, faBuilding)
library.add(faCarSide, faBuilding)
library.add(faSignOutAlt, faBuilding)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false