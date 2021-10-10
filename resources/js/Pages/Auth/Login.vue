<template>
    <div>
        <ValidationErrors class="mb-4" />

        <v-card
            class="mx-auto"
            :loading="form.processing"
            :max-width="400"
            >
            <v-card-title>Log in</v-card-title>
            <v-card-text>
                <div v-if="status" class="mb-4 green--text">
                    {{ status }}
                </div>

                <form @submit.prevent="submit">
                    <v-text-field label="Email" type="email" v-model="form.email" required autofocus  />

                    <v-text-field label="Password" type="password" v-model="form.password" required  />

                    <v-checkbox label="Remember me" v-model="form.remember">
                        Remember me
                    </v-checkbox>

                    <div class="d-flex align-center justify-space-between">
                        <router-link v-if="canResetPassword" :href="route('password.request')">
                            Forgot your password?
                        </router-link>

                        <v-btn type="submit" :loading="form.processing" :disabled="form.processing">
                            Log in
                        </v-btn>
                    </div>
                </form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        canResetPassword: Boolean,
        status: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                email: '',
                password: '',
                remember: false
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('login'), {
                onFinish: () => this.form.reset('password'),
            })
        }
    }
}
</script>
