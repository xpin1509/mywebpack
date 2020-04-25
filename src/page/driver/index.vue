<template>
    <div>
       <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
// import _ from '../../lib/lodash.js'
// import NP from '../../lib/np.js'
// import vuedraggable from 'vuedraggable'
// import { queryctrlWorkbenchTop } from '../../lib/dataApi'
export default {
    data () {
        return {
            message: 'Hello Driver!',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    mounted () {
        // var array = [1]
        // var other = _.concat(array, 2, [3], [[4]])
        // console.log(other)
        // console.log(NP.times(0.2, 0.1))
        // var array = [1, 2, 3];
 
        // _.fill(array, 'a');
        // console.log(array)
        // this.init()
    },
    methods: {
        async init () {
            // const { data } = await queryctrlWorkbenchTop()
            // console.log(data)
        }
    }
}
</script>