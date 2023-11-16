<template>
<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="text-center"> <!-- Wrap content in a div for better alignment -->
        <h1 class="">
            404 {{ $t('Not Found') }}
        </h1>
        <button class="btn btn-danger ">
            <router-link style="text-decoration: none;" class="text-light link-underline-opacity-0" :to="{ name: 'Home' }">
                {{ $t('Back') }}
            </router-link>
        </button>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style></style>