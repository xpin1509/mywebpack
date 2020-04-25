<template>
    <div>
        {{ message }}
    </div>
</template>
<script>
// import { queryctrlWorkbenchContract } from '../../lib/dataApi'
export default {
    data () {
        return {
            message: 'Hello drag!'
        }
    },
    async mounted () {
        // await queryctrlWorkbenchContract()
    }
}
</script>