const areEqual = (array1, array2) => {
    if (array1.length === array2.length) {
        //  console.log(array1, array2);
        return array1.every((element, index) => {
            if (element === array2[index]) {
                return true;
            }
            return false;
        });
    }
    return false;
}

export default areEqual;