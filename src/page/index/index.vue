<template>
    <div>
        <!-- <img src="../../assets/image.png" alt="image">
        <img src="../../assets/logo.png" alt="end">
        <img src="../../assets/through.png" alt="through">
        <span style="color: red">{{ message }}</span>
        <div class="green">{{this.$store.state.count}}</div>
        <el-button @click="clickHandle">点击</el-button>
        <div class="imgbox"></div>
        <div class="imgbox2"></div>
        ---------
        {{message2}}
        <Child @emit-handle="emitHandle"/> -->
    </div>
</template>
<script>
import {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } from "tapable/lib/index"
export default {
    mounted () {
        // class Car {
        //     constructor() {
        //         this.hooks = {
        //             accelerate: new SyncHook(["newSpeed"]),
        //             brake: new SyncHook(),
        //             calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
        //         }
        //     }
        // }
        // const myCar = new Car()
        // myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
        // myCar.hooks.accelerate.call('newSpeed');
        // console.log(myCar)
        // console.dir(Car)
        // const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);

        // //绑定事件到webapck事件流
        // hook1.tap('111', (arg1, arg2, arg3) => console.log(arg1, arg2, arg3)) //1,2,3

        // //执行绑定的事件
        // hook1.call(1,2,3)

        // console.log(hook1)
    }
}
</script>