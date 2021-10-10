<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>
                <router-link href="/">
                    Tetris Republic
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                v-for="item in items"
                :key="item.label"
                :to="item.url">
                    <v-icon left>{{ item.icon }}</v-icon>
                    {{ item.label }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        label:'Home',
                        icon:'mdi-home',
                        url:"/"
                    },
                    {
                        label:'Another Page',
                        icon:'mdi-plus',
                        url:"/test",
                    }
                ]
            }
        }
    }
</script>
