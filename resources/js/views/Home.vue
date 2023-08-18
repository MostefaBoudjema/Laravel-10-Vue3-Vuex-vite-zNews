<template>
    <div class="container mt-5">
        <h1>Home</h1>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Products',
    computed: {
        ...mapState('products', ['products'])
    },
    methods: {
        ...mapActions('products', ['addProduct'])
    }
}
</script>
  