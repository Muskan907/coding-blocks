// create a function that takes arguments one by one instead of taking all the inputs at once.
// curry fn looks like : sum(a)(b)(c)()

function sum(a){
    if(!a) return 0;
    let ans = a;
    function smallerSum(b){
        if(!b) return ans;
        ans += b;
        return smallerSum;
    }
    return smallerSum;
}

console.log(sum())
console.log(sum(10)())
console.log(sum(10)(20)())
console.log(sum(10)(20)(30)())