<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ name: 'Index' }">Logo</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">                        
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'Products' }">Products</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Navbar mounted.')
    }
}
</script>
