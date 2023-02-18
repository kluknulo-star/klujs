<template>
    <div class="container">
        <div class="mb-3">
            <i>Header</i>
        </div>

        <div class="row mb-3">
            <div class="col-2">
                <router-link :to="{name: 'person.index'}" class="btn btn-outline-dark">All people</router-link>
            </div>
            <div class="col-2">
                <router-link :to="{name: 'person.create'}" class="btn btn-outline-dark">Add new</router-link>
            </div>
        </div>

        <router-view></router-view>

        <div class="mt-5">
            <i>Footer</i>
        </div>
    </div>

</template>

<script>
export default {
    name: "Root"
}
</script>

<style scoped>

</style>
