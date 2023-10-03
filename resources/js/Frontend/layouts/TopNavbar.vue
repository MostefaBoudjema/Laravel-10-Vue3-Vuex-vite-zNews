<template>
    <div>
        <div class="bg-light-green py-1">
            <div class="container ">
                <div class="d-flex justify-content-end text-white fw-bold">
                    020 8452 6025 | admin@znews.co.uk
                </div>
            </div>
        </div>
        <div class="bg-light py-3">
            <div class="container">
                <div class=" text-center">
                    <router-link :to="{ name: 'Home' }">
                        <img src="/images/NEW-LOGO-INK-STYLE-1.png" class="w-25" alt="logo">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log('Navbar mounted.')
    }
}
</script>
<style scoped>
.bg-light-green {
    background-color: #6e7b6f;
}
</style>