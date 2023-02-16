<template>

</template>

<script>
export default {
    name: "SomeComponent",

    data() {
    },

    mounted() {
        console.log(this.$parent.$parent.parentLog() + 'from SomeComponent')
    },

    methods: {
    },
}
</script>

<style scoped>

</style>
