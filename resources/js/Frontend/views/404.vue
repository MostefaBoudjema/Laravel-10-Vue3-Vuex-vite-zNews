<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <h1 class="">
            404 {{ $t('Not Found') }}
        </h1>
        <button class="btn btn-danger ">
            <router-link class="text-light " :to="{ name: 'Home' }">
                {{ $t('Back') }}
            </router-link>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>