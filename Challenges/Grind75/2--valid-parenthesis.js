/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const openings = Object.keys(map);
    const closings = Object.values(map);

    const stack = [];

    for (let i = 0; i < s.length; i++){
        if (s.length === 1) {
            return false;
        }
        const tag = s.charAt(i);
        if (openings.includes(tag)) {
            stack.push(tag)
        } else if (closings.includes(tag)) {
            const last = stack.pop();
            const valid = map[last] === tag;
            if (!valid) {
                return false
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};