<template>
    <table class="table table-dark table-striped w-50">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Возраст</th>
            <th scope="col">Аработа</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="person in people">
            <tr>
                <th scope="row">{{person.id}}</th>
                <td>{{person.name}}</td>
                <td>{{person.age}}</td>
                <td>{{person.job}}</td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Index",

    data(){
        return {
            people: null,
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
                    console.log(response);
                })
        },
    }
}
</script>

<style scoped>

</style>
