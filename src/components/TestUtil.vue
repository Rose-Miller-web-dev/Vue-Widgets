<template>
    <div>
        <span>{{ name }}</span>

        <span @onClick="onChecked">
            <span v-if="done">
                Complete
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "TestUtil",
        props: {
            name: {
                type: String,
                required: true,
            }
        },

        data: () => ({
            done: false,
        }),

        methods: {
            onChecked() {
                this.done = !this.done
            }
        }
    }
</script>