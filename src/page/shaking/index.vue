<template>
    <div class="shaking">
        {{ message }}
        {{sum}}
    </div>
</template>
<script>
import axios from 'axios'
import {orderCard} from '../../lib/dataApi'
import './index.css'
export default {
    data () {
        return {
            message: 'Hello shaking!',
            sum: 0
        }
    },
    mounted () {
        this.add()
    },
    methods: {
        async add() {
        //    this.sum = cube(20) + cube(30) + cube(40)
            const { data } = await orderCard()
            console.log(data.data)
        }
    }
}
</script>