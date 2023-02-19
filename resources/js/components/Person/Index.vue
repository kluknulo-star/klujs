<template>
    <table class="table table-dark table-striped w-50">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Возраст</th>
            <th scope="col">Аработа</th>
            <th scope="col">Изменить</th>
            <th scope="col">Удалить</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="person in people">
            <tr>
                <td>
                    <router-link :to="{name: 'person.show', params: {id: person.id}}" class="text-info">
                       {{ person.name }}
                    </router-link>
                </td>
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td>
                    <router-link :to="{name: 'person.edit', params: {id: person.id}}" class="btn btn-outline-warning">
                        Редактировать
                    </router-link>
                </td>
                <td>
                    <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-outline-danger">
                        Удалить
                    </a>
                </td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Index",

    data() {
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

        deletePerson(id) {
            console.log(id);
            axios.delete(`/api/people/${id}`)
                .then(response =>{
                    console.log(response);
                    this.getPeople()
                })
        }
    }
}
</script>

<style scoped>

</style>
