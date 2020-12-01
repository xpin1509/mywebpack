console.log('this is a')

export function say (name, age) {
    if (name === age) {
        return 
    }
    console.log(name)
    console.log(age)
}

export function other (name, age) {
    const result = name + age
    return result
}

export function all (promiseArr) {
    return new Promise((resolve, reject) => {
        const result = []
        const count = 0
        for (let i = 0; i < promiseArr.length; i++) {
            // 全部成功返回result[]
            promiseArr[i].then(res => {
                result[i] = res
                ++count
                if (count === promiseArr.length) {
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}
