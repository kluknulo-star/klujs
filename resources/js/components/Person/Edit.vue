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
        <button :disabled="isDisabledSend" class="btn btn-primary" @click.prevent="updatePerson">Отправить</button>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Edit",

    data() {
        return {
            person: null,
        }

    },

    mounted() {
        console.log(this.$route.params);
        this.getPerson()
    },

    methods:
        {
            getPerson() {
                axios.get(`/api/people/${this.$route.params.id}`)
                    .then(response => {
                        this.person = response.data.data
                        console.log(response.data.data)
                    })
            },

            updatePerson() {
                let updatePerson = {name: this.person.name, age: this.person.age, job: this.person.job}
                axios.patch(`/api/people/${this.$route.params.id}`, updatePerson)
                    .then(response => {
                        console.log(response);
                        this.$router.push({name: 'person.show' , params: { id: this.$route.params.id }})
                    })
            },
        },
    computed: {
        isDisabledSend() {
            return !(this.person.name && this.person.age && this.person.job)
            // return false
        }
    }
}
</script>

<style scoped>

</style>
