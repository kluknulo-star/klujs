<template>
    <div class="w-25">
        <div class="mb-3">
            <label for="nameInput" class="form-label">Имя</label>
            <input type="text" class="form-control" v-model="name" id="nameInput" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3">
            <label for="ageInput" class="form-label">Возраст</label>
            <input type="number" class="form-control" v-model="age" id="ageInput" required>
        </div>
        <div class="mb-3">
            <label for="jobInput" class="form-label">Работа</label>
            <input type="text" class="form-control" v-model="job" id="jobInput" required>
        </div>
        <button class="btn btn-primary" @click.prevent="addPerson">Отправить</button>
    </div>
</template>

<script>
export default {
    name: "CreateComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    mounted() {
    },

    methods: {
        addPerson() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(response => {
                    this.name = null
                    this.age = null
                    this.job = null

                    console.log(response)
                })
        }

    },
}
</script>

<style scoped>

</style>
