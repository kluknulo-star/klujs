<template>
    <div class="w-25 mb-2">
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
    <SomeComponent :obj="obj"></SomeComponent>
</template>

<script>
import SomeComponent from "./SomeComponent.vue";
export default {
    name: "CreateComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null,

            obj: {
                'color': 'yellow',
                'number': 40,
                'isPublished': true,
            }
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
                    this.$parent.$refs.index.getPeople()
                    console.log(response)
                })
        }

    },

    components:{
        SomeComponent
    }
}
</script>

<style scoped>

</style>
