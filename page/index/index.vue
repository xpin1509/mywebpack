<template>
    <div>
        <img src="./image.png" alt="logo">
        <span style="color: red">{{ message }}</span>
        <div class="green">{{this.$store.state.count}}</div>
        <el-button @click="clickHandle">点击</el-button>
        <div class="imgbox"></div>
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
    mounted () {
        var array = [1]
        var other = _.concat(array, 2, [[4]])
        console.log(other)
        console.log(NP.plus(0.2, 0.1))
        console.log(require('../../assets/image.png'))
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
</style>