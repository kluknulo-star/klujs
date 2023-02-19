<template>
    <div class="mb-2">
        <h1>Создать человека</h1>
        <!--        <h1>{{name}} {{age}} {{job}}</h1>-->
    </div>
    <div class="w-25 mb-2 mt-2">
        <div class="mb-3">
            <label for="nameInput" class="form-label">Имя</label>
            <input type="text" class="form-control" id="nameInput" v-model="person.name" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3">
            <label for="ageInput" class="form-label">Возраст</label>
            <input type="number" class="form-control" id="ageInput" v-model="person.age" required>
        </div>
        <div class="mb-3">
            <label for="jobInput" class="form-label">Работа</label>
            <input type="text" class="form-control" id="jobInput" v-model="person.job" required>
        </div>
        <div class="mb-3">
            <button :disabled="isDisabledSend" class="btn btn-primary" @click.prevent="$store.dispatch('storePerson', person)">Отправить</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Create",

    data(){
        return{
            person: {
                name: null,
                age: null,
                job: null,
            },
        }
    },

    mounted() {
    },

    computed: {
        isDisabledSend() {
            return !(this.person.name && this.person.age && this.person.job)
            // return false
        },
    }

}
</script>

<style scoped>

</style>
