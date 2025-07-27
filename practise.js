/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let smaller
    let larger 
    let match = ''

    if(str1.length > str2.length){
        larger = str1
        smaller = str2
    }else{
        larger = str2
        smaller = str1
    }

    for(let i = 1; i <= smaller.length; i++){
        let candidate = smaller.slice(0,i)
        if(candidate.repeat((str1.length/candidate.length)) === str1 && candidate.repeat((str2.length/candidate.length)) === str2  ){
            match = candidate
        }

    }
    console.log(match)
    
};

gcdOfStrings("ABCABCABCABC", "ABCABC")