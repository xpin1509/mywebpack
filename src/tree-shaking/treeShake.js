// import { say } from './a'
// import Event from '../lib/Event'
// import './index.css'
// import _ from '../lib/lodash'
// import Icon from '../assets/logo.png';
// import { doSome } from 
import { cube } from '../lib/math.js';
// say('xiaoming', 28)


// const ev = new Event()
// ev.on('publish', value => {
//     value ++
//     console.log(value)
// })

// ev.emit('publish', 10)

// document.write('hello world')

// doSome('boy')

// import('./b').then(() => {
//     console.log('import...')
// })

function component() {
    var element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // // 将图像添加到我们现有的 div。
    // var myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element;
}

document.body.appendChild(component())

// eval('alert("hello world")')