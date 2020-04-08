<template>
    <div>
        {{ message }}
    </div>
</template>
<script>
// import _ from '../../lib/lodash.js'
// import NP from '../../lib/np.js'
// import vuedraggable from 'vuedraggable'
import { queryctrlWorkbenchTop } from '../../lib/dataApi'
export default {
    data () {
        return {
            message: 'Hello Driver!'
        }
    },
    mounted () {
        var array = [1]
        var other = _.concat(array, 2, [3], [[4]])
        console.log(other)
        console.log(NP.times(0.2, 0.1))
        var array = [1, 2, 3];
 
        _.fill(array, 'a');
        console.log(array)
        this.init()
    },
    methods: {
        async init () {
            const { data } = await queryctrlWorkbenchTop()
            console.log(data)
        }
    }
}
</script>