<template>
    <div class="mb-2">
        <h1>Создать человека</h1>
        <!--        <h1>{{name}} {{age}} {{job}}</h1>-->
    </div>
    <div class="w-25 mb-2 mt-2">
        <div class="mb-3">
            <label for="nameInput" class="form-label">Имя</label>
            <input type="text" class="form-control" id="nameInput" v-model="name" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3">
            <label for="ageInput" class="form-label">Возраст</label>
            <input type="number" class="form-control" id="ageInput" v-model="age" required>
        </div>
        <div class="mb-3">
            <label for="jobInput" class="form-label">Работа</label>
            <input type="text" class="form-control" id="jobInput" v-model="job" required>
        </div>
        <div class="mb-3">
            <button :disabled="isDisabledSend" class="btn btn-primary" @click.prevent="storePerson">Отправить</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Create",

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
        storePerson() {
            let person = {name: this.name, age: this.age, job: this.job}
            axios.post('/api/people/', person)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({name: 'person.index'})
                })
        },


    },

    computed: {
        isDisabledSend() {
            return !(this.name && this.age && this.job)
            // return false
        }
    }

}
</script>

<style scoped>

</style>
