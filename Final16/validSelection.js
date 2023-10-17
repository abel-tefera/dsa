const validSelections = (students, bkValues = [], output = []) => {
    if (
        bkValues.length === 3
    ) {
        output.push(bkValues);
        return;
    } else {
        for (let i = 0; i < students.length; i++) {
            if (bkValues[bkValues.length - 1] !== students[i]) {
                bkValues.push(students[i]);
                validSelections(students.substring(i + 1), bkValues, output);
                bkValues.pop();
            }
        }
    }

    return output.length;
}

console.log(validSelections("BBGGBG"));//6
console.log(validSelections("BBBGG"));//0