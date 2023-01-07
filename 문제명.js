// test
var { a1: name, a2: dum1b, ...rest2_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
console.log(name);
console.log(dum1b);
console.log(rest2_a);


// eslint-disable-next-line no-unused-vars
var { a1: awesome_name, a2: dumb, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
console.log(awesome_name); // 10
console.log(dumb); // 20

console.log('------------------------------------------')

const target = ['가', '나', '다', '라', '다', '마'];
const result = target.includes('마');
console.log(result)

console.log('------------------------------------------')
const arr = ['가', '라', '다', '라', '다', '라'];
// for (let i = 0; i < arr.length; i++) {
//     arr.splice('라')
//     console.log(arr)
// }
console.log(arr)
console.log('------------------------------------------')
let index = arr.indexOf('라')
console.log(index)
console.log('----')
console.log(arr.indexOf('가'))
console.log('---=-')
while (index > -1) {
    console.log(arr.indexOf('가'))
    console.log('---==-')
    arr.splice(index, 1)
    index = arr.indexOf('라')
    console.log(index)
}
console.log(arr)
console.log(index)
console.log('------------------------------------------')

const a = (x, y, z) => {
    return x * y * z
}

console.log(a(1, 2, 3))
const zerocho = {
    name: {
        first: '우식',
        last: ' 김',
    },
    gender: 'm',
}

console.log(zerocho['name']['last'])
console.log(zerocho.name['last'])