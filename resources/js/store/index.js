import { createStore } from 'vuex'
import Person from './modules/person'

const store = createStore({
    modules: {
      Person
    },

    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store
