<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name: {{ name }}</div>
        <div>Job: {{ vasyaJob }}</div>
        <button @click="sayHello"> Hello </button>
        <button @click="sayHello"> Hi </button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            name: 'Вася',
            age: 20,
            married: false,

        }
    },

    methods: {
        sayHello() {
            console.log('Hello world')
        },


    },

    computed: {
        vasyaJob() {
            return this.name + ' работает в булочной'
        },
    },

    components: {
        SinglePostComponent
    },

}
</script>

<style scoped>

</style>
