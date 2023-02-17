<template>
    <div>
        <div>Color: {{obj.color}}</div>
        <div>Number: {{obj.number > 10 ? 'more 10' : obj.number}}</div>
        <div>Status: {{obj.isPublished==='true' ? 'Published' : 'Is not published'}}</div>
    </div>
</template>

<script>
export default {
    name: "SomeComponent",

    data() {
    },

    props: [
        'obj'
    ],

    mounted() {
        console.log(this.$parent.$parent.parentLog() + 'from SomeComponent')
    },

    methods: {
    },
}
</script>

<style scoped>

</style>
