const canConstruct = (ransomNote, magazine) => {
    const letters = {

    };

    magazine.split("").forEach((l) => {
        if (letters[l]) {
            letters[l] += 1
        } else {
            letters[l] = 1
        }
    })

    console.log('XX', letters);

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote.charAt(i);
        if (letters[char] && letters[char] > 0) {
            letters[char] -= 1;
        } else {
            return false
        }
    }
    return true
};

let ransomNote = "aa";
let magazine = "aab";

console.log(canConstruct(ransomNote, magazine));