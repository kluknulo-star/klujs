<template>
    <div class="mb-2">
        <h1>Изменить человека</h1>
    </div>
    <div class="w-25 mb-2 mt-2">
        <div class="mb-3">
            <label for="nameInput" class="form-label" >Имя</label>
            <input type="text" class="form-control" id="nameInput" v-model="name" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3">
            <label for="ageInput" class="form-label" >Возраст</label>
            <input type="number" class="form-control" id="ageInput" v-model="age" required>
        </div>
        <div class="mb-3">
            <label for="jobInput" class="form-label" >Работа</label>
            <input type="text" class="form-control" id="jobInput" v-model="job" required>
        </div>
        <button class="btn btn-primary" @click.prevent="updatePerson">Отправить</button>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Edit",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }

    },

    mounted() {
        console.log(this.$route.params.id);
        this.getPerson()
    },

    methods:
        {
            getPerson() {
                axios.get('/api/people/' + this.$route.params.id)
                    .then(response => {
                        let person = response.data
                        this.name = person.name
                        this.age = person.age
                        this.job = person.job

                        console.log(response.data)
                    })
            },

            updatePerson() {
                let updatePerson = {name: this.name, age: this.age, job: this.job}
                axios.patch('/api/people/' + this.$route.params.id, updatePerson)
                    .then(response => {
                        console.log(response);
                        router.push({name: 'person.show' , params: { id: this.$route.params.id }})
                    })
            },
        }
}
</script>

<style scoped>

</style>
