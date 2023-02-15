<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name: {{ name }}</div>
        <div>Voice: {{ sayHello() }}</div>
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
            name: 'Vasya',
            age: 20,
            married: false,

        }
    },

    methods: {
        sayHello() {
            console.log('Hello world')
        },


    },

    components: {
        SinglePostComponent
    },

}
</script>

<style scoped>

</style>
