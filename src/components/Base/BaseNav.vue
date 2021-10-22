<template>
    <!-- Navigation -->
    <div class="shadow-sm pl-3 pr-3">
        <b-navbar toggleable="lg" type="light" variant="#d9d9d9">
            <router-link :to="{ name: 'Home' }">
                <b-navbar-brand class="logo-prand">Unifi Solutions</b-navbar-brand>
            </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto p-2">
                    <router-link class="mt-1 btn btn-primary" :to="{ name: 'Recipe' }">
                        Add recipe   
                    </router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style lang="scss" scoped>
div { 
    .logo-prand { 
        font-family: 'Ephesis', cursive !important; 
        font-weight: bold;
        color: $primary;
    } 
}
</style>