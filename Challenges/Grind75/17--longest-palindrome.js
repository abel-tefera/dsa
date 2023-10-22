const longestPalindrome = (s) => {
    const letters = {};
    let longest = 0;
    for (let i = 0; i < s.length; i++){
        const c = s.charAt(i);
        if (letters[c] === undefined){
            letters[c] = 1;
        } else {
            letters[c] += 1;
            if (letters[c] === 2){
                longest += 2;
                letters[c] = 0;
            }
        }
    }

    const rest = Object.values(letters).filter((a) => a !== 0);
    
    if (rest.length === 0) {
        return longest;
    }
    return longest + 1;
};