function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports.add = add
// console.log(module.exports)

// This pollutes the global space
// global.add = function add(a,b){
//     return a+b;
// }