<template>
    <div>
        <img src="../../assets/image.png" alt="image">
        <img src="../../assets/logo.png" alt="end">
        <img src="../../assets/through.png" alt="through">
        <span style="color: red">{{ message }}</span>
        <div class="green">{{this.$store.state.count}}</div>
        <el-button @click="clickHandle">点击</el-button>
        <div class="imgbox"></div>
        <div class="imgbox2"></div>
        ---------
        {{message2}}
    </div>
</template>
<script>
import _ from 'lodash'
import NP from '../../lib/np.js'
import vuedraggable from 'vuedraggable'
export default {
    data () {
        return {
            message: 'Hello Index!'
        }
    },
    computed: {
        message2() {
            return `${this.message}hahah`
        }
    },
    mounted () {
        var array = [1]
        var other = _.concat(array, 2, [[4]])
        console.log(other)
        console.log(NP.plus(0.2, 0.1))
    },
    methods: {
        clickHandle () {
            console.log('hahsad')
        }
    }
}
</script>
<style scoped>
.green{
    color: green;
}
.imgbox{
    background: url('../../assets/image.png');
    height: 100px;
    width: 100px;
}
.imgbox2{
    background: url('../../assets/end.png');
    height: 100px;
    width: 100px;
}
</style>