class MyWebpackPlugin {
    apply (compiler) {
        // compiler.hooks.done.tap('MyWebpackPlugin',() => {
        //     console.log('done')
        // })
        // compiler.hooks.compile.tap('MyWebpackPlugin',() => {
        //     console.log('compile')
        // })
        // compiler.hooks.run.tapAsync('MyWebpackPlugin',(compiler, callback) => {
        //     setTimeout(() => {
        //         console.log('run tapAsync')
        //         callback()
        //     }, 1000 * 1 * 1)
        // })
        // compiler.hooks.run.tapAsync('MyWebpackPlugin',() => {
        //     console.log('run')
        // })
    }
}

module.exports = MyWebpackPlugin