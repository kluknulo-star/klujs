<template>
    <tr :class="this.$parent.isEditing(person.id) ? '' : 'd-none'">
        <th scope="row">{{ person.id }}</th>
        <td><input type="text" class="form-control" v-model="editedName"></td>
        <td><input type="number" class="form-control" v-model="editedAge"></td>
        <td><input type="text" class="form-control" v-model="editedJob"></td>
        <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a></td>
    </tr>
</template>

<script>
export default {
    name: "EditComponent",

    data() {
        return {
            editedName: null,
            editedAge: null,
            editedJob: null,
        }
    },

    props: [
        'person'
    ],

    mounted() {
    },

    methods: {

        updatePerson(id) {
            let updatePerson = {name: this.editedName, age: this.editedAge, job: this.editedJob}

            axios.patch(`/api/people/${id}`, updatePerson)
                .then(response => {
                    console.log(response.data)
                    this.$parent.editPersonId = null
                    this.$parent.getPeople()
                })
        },
    },
}
</script>

<style scoped>

</style>
