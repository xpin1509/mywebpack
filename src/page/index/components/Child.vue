<template>
    <div>
        {{ message }}
    </div>
</template>
<script>
export default {
    data () {
        return {
            message: 'Hello drag!'
        }
    },
    beforeCreate () {
        console.log(this.$listeners, this.$attrs)
    }
}
</script>