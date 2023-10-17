const getMaxBloomDays = (flowers) => {
    const startDays = flowers.map(([start, _]) => start);
    const endDays = flowers.map(([_, end]) => end);

    const startDay = Math.min(...startDays);
    const endDay = Math.max(...endDays);
    const ans = [];

    for (let i = startDay; i <= endDay; i++) {
        ans.push(0);
        flowers.forEach(([start, end]) => {
            if (start <= i && i <= end) {
                ans[i - 1] += 1;
            }
        })
    }

    const maxOnDay = Math.max(...ans);
    return [ans.indexOf(maxOnDay) + 1, ans.lastIndexOf(maxOnDay) + 1]

}
console.log(getMaxBloomDays([[1, 3], [1, 8], [2, 5]]));// [2, 3]
console.log(getMaxBloomDays([[1, 3], [3, 6], [6, 9]]));// [3, 6]