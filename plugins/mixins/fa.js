import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faBuilding)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false