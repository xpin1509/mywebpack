<template>
    <div>
        {{ message }}
    </div>
</template>
<script>
import vuedraggable from 'vuedraggable'
export default {
    data () {
        return {
            message: 'Hello drag!'
        }
    },
    mounted () {
        console.log(vuedraggable)
    }
}
</script>