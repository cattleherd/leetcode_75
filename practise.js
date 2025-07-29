    /**
     * @param {character[]} chars
     * @return {number}
     */
    //[a,b]
    var compress = function(chars) {
        let read = 0
        let write = 0;

        while(read < chars.length){
            let currentchar = chars[read]  
            let count = 0 
            while(read < chars.length && chars[read]=== currentchar){
                read++
                count++
            }      
            chars[write] = currentchar;
            write++;
            let countString = count.toString();
            if(count > 1){
                for(let i = 0; i < countString.length; i++){
                    chars[write] = countString[i]
                    write++;
                }
            }
            
        }
        return write;


    }



compress(["a","a","b","b","c","c","c"]
)