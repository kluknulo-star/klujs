<template>
    <div>
        <div v-if="person" class="mb-3">
            <router-link :to="{name: 'person.edit', params: {id: person.id}}" class="btn btn-info">
                Редактировать
            </router-link>
        </div>
        <div v-if="person">
            <h1 class="display-6">Имя: {{ person.name }}</h1>
            <h1 class="display-6">Возраст: {{ person.age }}</h1>
            <h1 class="display-6">Работа: {{ person.job }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
       person() {
           return this.$store.getters.person
       }
    },

}
</script>

<style scoped>

</style>
