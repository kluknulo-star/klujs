<template>
    <div>
        <SinglePostComponent></SinglePostComponent>

        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in personsAgeLess20">
                <tr>
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                </tr>
            </template>
            </tbody>
        </table>


    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: 'Vasya',
                    age: 20,
                    job: 'coach',
                }, {
                    id: 2,
                    name: 'Petya',
                    age: 21,
                    job: 'coder',
                }, {
                    id: 3,
                    name: 'Elena',
                    age: 18,
                    job: 'seller',
                }, {
                    id: 4,
                    name: 'Ksu',
                    age: 25,
                    job: 'manik',
                }, {
                    id: 5,
                    name: 'Olya',
                    age: 24,
                    job: 'traveller',
                },
            ]
        }
    },

    methods: {},

    computed: {
        personsAgeOlder20() {
            return this.persons.filter(function (person){
                return person.age > 20
            })
        },
        personsAgeLess20() {
            return this.persons.filter(function (person){
                return person.age < 20
            })
        },
    },

    components: {
        SinglePostComponent
    },

}
</script>

<style scoped>

</style>
