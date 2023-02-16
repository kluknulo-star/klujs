<template>
    <div class="container">
            <SinglePostComponent></SinglePostComponent>
            <CreatePostComponent></CreatePostComponent>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";
import CreatePostComponent from "./CreateComponent.vue";

export default {
    name: "PostComponent",

    components: {
        SinglePostComponent,
        CreatePostComponent
    },

}
</script>

<style scoped>

</style>
