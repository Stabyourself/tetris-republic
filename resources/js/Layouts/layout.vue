<template>
    <!-- Page Content -->
    <v-app>
        <v-main>
            <tr-menu></tr-menu>

            <v-container>
                <slot></slot>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                showingNavigationDropdown: false,
            }
        },
    }
</script>
