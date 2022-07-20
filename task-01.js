const stringLength = (string) => {
    let res = 0;
    for( let i in string){
        res++;
        // console.log(stringLength('hello'))
    }
    return res;
}
console.log(stringLength('good Morning'))

module.exports = stringLength;