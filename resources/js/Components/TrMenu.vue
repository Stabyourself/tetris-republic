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
                    to="/test">
                    <v-icon left>mdi-plus</v-icon>
                    Another page
                </v-btn>

                <v-menu offset-y
                    v-if="$page.props.auth.user">
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">
                            <v-icon left>mdi-account</v-icon>
                            {{ $page.props.auth.user.name }}
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-action>
                                <router-link :href="route('logout')" method="post" as="v-btn">
                                    <v-icon left>mdi-login</v-icon>
                                    Log Out
                                </router-link>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn
                    v-else
                    :to="route('login')">
                    <v-icon left>mdi-login</v-icon>
                    Log In
                </v-btn>

            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
