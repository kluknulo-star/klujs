<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name {{name}}</div>
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

    components: {
        SinglePostComponent
    },

}
</script>

<style scoped>

</style>
