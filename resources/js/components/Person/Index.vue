<template>
    <table class="table rounded rounded-3 overflow-hidden">
        <thead class="table-dark">
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
                <th scope="row">{{ person.id }}</th>
                <td>
                    <router-link :to="{name: 'person.show', params: {id: person.id}}" class="text-">
                       {{ person.name }}
                    </router-link>
                </td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td>
                    <router-link :to="{name: 'person.edit', params: {id: person.id}}" class="btn btn-outline-warning">
                        Редактировать
                    </router-link>
                </td>
                <td>
                    <a href="#" @click.prevent="$store.dispatch('deletePerson', person.id)" class="btn btn-outline-danger">
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

    mounted() {
        this.$store.dispatch('getPeople')
    },

    computed: {
        people(){
            return this.$store.getters.people
        }
    },
}
</script>

<style scoped>

</style>
