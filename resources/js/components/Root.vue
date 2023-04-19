<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col-auto">
                <router-link :to="{name: 'person.index'}" class="btn btn-outline-dark">All people</router-link>
            </div>
            <div class="col-auto">
                <router-link :to="{name: 'person.create'}" class="btn btn-outline-dark">Add new</router-link>
            </div>
        </div>

        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: "Root"
}
</script>

<style scoped>

</style>
