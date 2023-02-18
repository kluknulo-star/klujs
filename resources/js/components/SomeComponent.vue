<template>
    <div class="mb-3">
        <div><b>Color:</b> {{obj.color}}</div>
        <div><b>Number:</b> {{obj.number > 10 ? 'more 10' : obj.number}}</div>
        <div><b>Status:</b> {{obj.isPublished==='true' ? 'Published' : 'Is not published'}}</div>
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
    },

    methods: {
    },
}
</script>

<style scoped>

</style>
