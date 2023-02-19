const state = {
    person: null
}

const getters = {
    person: () => state.person
}


const actions = {
    getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(response => {
                commit('setPerson', response.data.data)
            })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}
export default {
    state,
    mutations,
    getters,
    actions,
}
