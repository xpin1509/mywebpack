class Event {
    constructor () {
        this.subs = {}
    }
    on (type, fn) {
        if (this.subs[type]) {
            this.subs[type].push(fn)
        } else{
            this.subs[type] = [fn]
        }
    }
    remove (type, fn) {
        const result = this.subs[type]
        if (result && result.length) {
            result = result.filter(f => f !== fn)
        }
    }
    emit (type, ...arg) {
        const fnList = this.subs[type]
        // console.error('I get called from print.js!');
        if (fnList && fnList.length) {
            for (let fn of fnList) {
                fn.apply(this, arg)
            }
        }
    }
}

export default Event