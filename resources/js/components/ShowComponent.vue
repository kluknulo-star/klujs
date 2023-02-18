<template>
    <tr :class="this.$parent.isEditing(person.id) ? 'd-none' : ''">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a href="#" @click.prevent="this.choicePersonEdit(person.id, person.name, person.age, person.job)"
               class="btn btn-warning">Edit</a></td>
        <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
    </tr>
</template>

<script>

export default {
    name: "ShowComponent",

    data() {
        return {
        }
    },

    mounted() {
    },

    props: [
        'person'
    ],

    methods: {
        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(response => {
                    console.log(response.data)
                    this.$parent.getPeople()
                })
        },
        choicePersonEdit(id, name, age, job) {
            this.$parent.editPersonId = id

            let editRef = `edit_${id}`

            console.log(this.$parent.$refs[editRef]);
            let editComponent = this.$parent.$refs[editRef][0]
            editComponent.editedName = name
            editComponent.editedAge = age
            editComponent.editedJob = job
        },

    },
}
</script>

<style scoped>

</style>
