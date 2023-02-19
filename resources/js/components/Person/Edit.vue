<template>
    <div class="mb-2">
        <h1>Изменить человека</h1>
    </div>
    <div class="w-25 mb-2 mt-2" v-if="person">
        <div class="mb-3">
            <label for="nameInput" class="form-label" >Имя</label>
            <input type="text" class="form-control" id="nameInput" v-model="person.name" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3">
            <label for="ageInput" class="form-label" >Возраст</label>
            <input type="number" class="form-control" id="ageInput" v-model="person.age" required>
        </div>
        <div class="mb-3">
            <label for="jobInput" class="form-label" >Работа</label>
            <input type="text" class="form-control" id="jobInput" v-model="person.job" required>
        </div>
        <button :disabled="isDisabledSend" class="btn btn-primary" @click.prevent="$store.dispatch('updatePerson', person)">Отправить</button>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        person() {
            return this.$store.getters.person
        },
        isDisabledSend() {
            return !(this.person.name && this.person.age && this.person.job)
        },
    }
}
</script>

<style scoped>

</style>
