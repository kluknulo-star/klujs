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
        this.$refs.index.indexLog()
        console.log(this.$refs.index.editedName);
    },

    methods:{
        parentLog(){
            return 'this is parent log';
        }
    },

    components: {
        CreateComponent,
        IndexComponent,
    },

}
</script>

<style scoped>

</style>
