<template>
    <div class="bg-dark">
        <div class="container oswald-700  ">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <h1 class="navbar-brand m-0 oswald-700">A TRUSTED SERVICE SINCE 2010</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li class="nav-item me-3">
                                <router-link class="nav-link" :class="{ active: $route.name === 'Products' }"
                                    aria-current="page" :to="{ name: 'Products' }">{{ $t("Products") }}</router-link>
                            </li>
                            <!-- <li class="nav-item">

                                <router-link class="nav-link" :class="{ active: $route.name === 'Products2' }"
                                    aria-current="page" :to="{ name: 'Products2' }">Products2</router-link>
                            </li> -->
                            <li class="nav-item me-3">

                                <router-link class="nav-link" :class="{ active: $route.name === 'About' }"
                                    aria-current="page" :to="{ name: 'About' }">{{ $t('About us') }}</router-link>
                            </li>
                            <li class="nav-item me-3">

                                <router-link class="nav-link" :class="{ active: $route.name === 'Contact' }"
                                    aria-current="page" :to="{ name: 'Contact' }">{{ $t('Contact') }}</router-link>
                            </li>
                            <li class="nav-item me-3">

                                <router-link class="nav-link" :class="{ active: $route.name === 'Testimonials' }"
                                    aria-current="page" :to="{ name: 'Testimonials' }">{{ $t('Testimonials') }}</router-link>
                            </li>
                            <li class="nav-item me-3">

                                <router-link class="nav-link" :class="{ active: $route.name === 'Postcode' }"
                                    aria-current="page" :to="{ name: 'Postcode' }">{{ $t('Postcode') }}</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {{ $t('Our Services') }}
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><router-link :to="{ name: 'HomeDelivery' }" class="dropdown-item oswald-700 p-3" :class="{ active: $route.name == 'HomeDelivery' }">{{ $t('Home Delivery') }}</router-link></li>
                                    <li><router-link :to="{ name: 'BusinessDelivery' }"  class="dropdown-item oswald-700 p-3" :class="{ active: $route.name === 'BusinessDelivery' }">{{ $t('Business Delivery') }}</router-link></li>
                                    <li><router-link :to="{ name: 'LeafletsDistribution' }"  class="dropdown-item oswald-700 p-3" :class="{ active: $route.name === 'LeafletsDistribution' }">{{ $t('Leaflets Distribution') }}</router-link></li>
                                    <li><router-link :to="{ name: 'MagazinesDistribution' }"  class="dropdown-item oswald-700 p-3" :class="{ active: $route.name === 'MagazinesDistribution' }">{{ $t('Magazines Distribution') }}</router-link></li>
                                    <li><router-link :to="{ name: 'Essentials' }"  class="dropdown-item oswald-700 p-3" :class="{ active: $route.name === 'Essentials' }">{{ $t('Essentials') }}</router-link></li> 
                                </ul>
                            </li>
                        <!-- </ul>
                        <ul class="nav-pills navbar-nav ml-auto d-flex d-md-none d-lg-flex"> -->
                    <li v-if="true" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <!-- <img :src="user.photo_url" style="width: 15px;" class="rounded-circle profile-photo mr-1" alt /> -->
                            <!-- {{ user.name }} -->
                        </a>
                        <div class="dropdown-menu" role="menu2">
                            <router-link :to="{ name: 'Essentials' }" class="dropdown-item pl-3 px-2">
                                {{ $t("settings") }}
                            </router-link>

                            <div class="dropdown-divider" />
                            <a href="#" class="dropdown-item pl-3 px-2" @click.prevent="logout">
                                {{ $t("logout") }}
                            </a>
                        </div>
                    </li>

                    <template v-else>
                        <li class="nav-item " @click="closeToggler">
                            <router-link class="nav-link text-nowrap px-2" :to="{ name: 'Login' }">
                                {{ $t("login") }}
                            </router-link>
                        </li>
                        <!-- <li class="nav-item" @click="closeToggler">
                            <router-link class="nav-link mr-md-1 px-2" :to="{ name: 'register' }">
                                {{ $t("register") }}
                            </router-link>
                        </li> -->
                    </template>
                </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log('Navbar mounted.')
    },
    methods:{
        closeToggler(){
            console.log('closeToggler.');
        }
    }
}
</script>
<style scoped>
.oswald-700 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 1.5rem !important;
    text-transform: uppercase;

}
</style>