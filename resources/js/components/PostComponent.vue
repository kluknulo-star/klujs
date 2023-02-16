<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            persons: [],
        }
    },

    mounted() {
        this.getPosts()
    },

    methods: {
        getPosts() {
            axios.get('/persons')
                .then(
                    res => {
                        this.persons = res.data
                        console.log(res);
                    })
                .catch(
                    res => {
                        console.log({'error': res});
                    })
                .finally(
                    res => {
                    })
        }
    },

    computed: {},

    components: {
        SinglePostComponent
    },

}
</script>

<style scoped>

</style>
