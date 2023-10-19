const isPalindrome = function(s) {
    const sliced = s.replace(/[^A-Z0-9]/ig, "").split("").map(v => v.toLowerCase());
    for (let i = 0; i < Math.floor(sliced.length - 1); i++){
        if (sliced[i] !== sliced[sliced.length - i - 1]) {
            return false
        }
    }
    return true;
};

const str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str))