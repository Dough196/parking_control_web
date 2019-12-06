import Vue from 'vue'
import { mapGetters } from 'vuex'

const User = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters([
          'user', 'loggedIn', 'isAdmin'
        ])
      }
    })
  }
}

Vue.use(User)
