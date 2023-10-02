<template>
    <div class="bg-dark text-white">
        <div class="container">
            <div class="footer py-1 text-center  py-5">
                <div class="row">
                    <div class="col-md-4 col-sm-6 ">
                        <img src="/images/NEW-LOGO-INK-STYLE-1.png" class="w-50 mb-4" alt="logo">
                        <p class="text-start">Z News Distribution Limited
                            Registered as a limited company in England & Wales
                            Company Number 7809654</p>
                        <ul class="list-unstyled">
                            <li class="text-start">Email: admin@znews.co.uk</li>
                            <li class="text-start">Telephone: 020 8452 6025</li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <ul class="list-unstyled">
                            <li class="text-start">Operating Address</li>
                            <br />
                            <li class="text-start">G20</li>
                            <li class="text-start">Oxgate House</li>
                            <li class="text-start">Oxgate Ln</li>
                            <li class="text-start">London NW2 7HU</li>
                            <br />
                            <li class="text-start">Privacy Policy</li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <ul class="list-unstyled">
                            <li class="text-start">Menu</li>
                            <br />
                            <li class="text-start">
                                <router-link class="nav-link" aria-current="page" :to="{ name: 'Home' }">Home
                                </router-link>
                            </li>
                            <li class="text-start">
                                <router-link class="nav-link" aria-current="page" :to="{ name: 'Contact' }">Contact
                                </router-link>
                            </li>
                            <li class="text-start">
                                <router-link class="nav-link" aria-current="page" :to="{ name: 'About' }">About
                                </router-link>
                            </li>
                            <li class="text-start">
                                <router-link class="nav-link" aria-current="page" :to="{ name: 'Postcode' }">Postcode
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <img src="/images/GoogleMapTA.webp" class="w-100 mb-4" alt="logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer py-1 text-center bg-black text-white">
        <div class="copyright">
            Copyright &copy; Z News Distribution Limited 2021 | Web Design by <a class="text-white"
                href="https://mostefa-boudjema.vercel.app/" target="_blank">Mostefa Boudjema</a> Ltd
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-comp'
}
</script>

<style></style>