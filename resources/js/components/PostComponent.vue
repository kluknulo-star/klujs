<template>
    <div class="container">
        <CreateComponent ref="create"></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>

<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostComponent",

    data() {
    },


    mounted() {
    },

    methods:{
    },

    components: {
        CreateComponent,
        IndexComponent,
    },

}
</script>

<style scoped>

</style>
