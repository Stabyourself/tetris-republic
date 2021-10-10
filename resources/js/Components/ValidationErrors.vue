<template>
    <div v-if="hasErrors">
        <div class="error--text">Whoops! Something went wrong.</div>

        <ul class="mt-3 error--text">
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        errors() {
            return this.$page.props.errors
        },

        hasErrors() {
            return Object.keys(this.errors).length > 0
        },
    }
}
</script>
