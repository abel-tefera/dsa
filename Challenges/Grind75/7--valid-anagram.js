// Inefficient
const isAnagramSlow = (s, t) => {
    for (let i = 0; i < t.length; i++){
        if (s.length === 0) {
            return false;
        }
        s = s.replace(t.charAt(i), "");
    }

    return s.length === 0;
};

// Efficient
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!map[s.charAt(i)]) { map[s.charAt(i)] = 1 } else {
            map[s.charAt(i)] += 1;
        }
    }

    for (let i = 0; i < t.length; i++){
        if (!map[t.charAt(i)] || map[t.charAt(i) === 0]) {
            return false
        }
        map[t.charAt(i)] -= 1;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"))