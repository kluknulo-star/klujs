<template>
    <div class="w-50">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr :class="isEditing(person.id) ? 'd-none' : ''">
<!--                <tr>-->
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><a href="#" @click.prevent="choicePersonEdit(person.id, person.name, person.age, person.job)" class="btn btn-warning">Edit</a></td>
                    <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
                </tr>
                <tr :class="isEditing(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" class="form-control" v-model="editedName"></td>
                    <td><input type="number" class="form-control" v-model="editedAge"></td>
                    <td><input type="text" class="form-control" v-model="editedJob"></td>
                    <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,

            editedName: null,
            editedAge: null,
            editedJob: null,
        }
    },

    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(response => {
                    this.people = response.data
                })
        },

        choicePersonEdit(id, name, age, job) {
            this.editedName = name
            this.editedAge = age
            this.editedJob = job
            this.editPersonId = id
        },

        isEditing(id){
            return this.editPersonId === id
        },

        updatePerson(id) {
            let updatePerson = {name: this.editedName, age: this.editedAge,job: this.editedJob}

            axios.patch(`/api/people/${id}`, updatePerson)
                .then(response =>{
                    console.log(response.data)
                    this.editPersonId = null
                    this.getPeople()
                })
        },

        deletePerson(id)
        {
            axios.delete(`/api/people/${id}`)
                .then(response =>{
                    console.log(response.data)
                    this.getPeople()
                })
        }

    },
}
</script>

<style scoped>

</style>
