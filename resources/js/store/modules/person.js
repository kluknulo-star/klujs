import router from "../../router";

const state = {
    person: null,
    people: null,
}

const getters = {
    person: state => state.person,
    people: state => state.people,
}


const actions = {
    getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(response => {
                commit('setPerson', response.data.data)
                console.log(response.data.data);
            })
    },
    getPeople({commit}) {
        axios.get('/api/people')
            .then(response => {
                commit('setPeople', response.data.data)
                console.log(response.data.data);
            })
    },
    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(response =>{
                dispatch('getPeople')
            })
    },
    updatePerson({}, data) {
        let updatePerson = {name: data.name, age: data.age, job: data.job}
        axios.patch(`/api/people/${data.id}`, updatePerson)
            .then(response => {
                console.log(response);
                router.push({name: 'person.show' , params: { id: data.id }})
            })
    },
    storePerson({}, data) {
        let person = {name: data.name, age: data.age, job: data.job}
        axios.post('/api/people/', person)
            .then(response => {
                console.log(response.data.data);
                router.push({name: 'person.index'})
            })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    }

}
export default {
    state,
    mutations,
    getters,
    actions,
}
