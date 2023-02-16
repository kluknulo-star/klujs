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
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr :class="isEditing(person.id) ? 'd-none' : ''">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><a href="#" @click.prevent="choicePersonEdit(person.id)" class="btn btn-warning">Edit</a></td>
                </tr>
                <tr :class="isEditing(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" class="form-control" v-model="editedName"></td>
                    <td><input type="number" class="form-control" v-model="editedAge"></td>
                    <td><input type="text" class="form-control" v-model="editedJob"></td>
                    <td><a href="#" @click.prevent="sendEditedPerson(person.id)" class="btn btn-success">Update</a></td>
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

        choicePersonEdit(id) {
            console.log(id)
            this.editPersonId = id
        },

        isEditing(id){
            return this.editPersonId === id
        },

        sendEditedPerson(id) {

            axios.patch('/api/people/' + id, {name: this.editedName, age: this.editedAge,job: this.editedJob})
                .then(response =>{
                    console.log(response.data);
                })
            this.editPersonId = null
        },

    },
}
</script>

<style scoped>

</style>
