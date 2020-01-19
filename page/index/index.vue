<template>
    <div>
        {{ message }}
        {{this.$store.state.count}}
        <el-button @click="clickHandle">点击</el-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: 'Hello Index!'
            }
        },
        // components: {
        //     'elButton': Button
        // },
        methods: {
            clickHandle () {
                console.log('hahsad')
            }
        }
    }
</script>