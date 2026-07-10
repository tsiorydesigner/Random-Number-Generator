function removeCoveredIntervals(intervals) {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    let count = 0;
    let maxEnd = -1;
    
    for (const [start, end] of intervals) {
        if (end > maxEnd) {
            count++;
            maxEnd = end;
        }
    }
    
    return count;
}

function runTests() {
    const test1 = [[1,4],[3,6],[2,8]];
    console.log(`Test 1: [${test1.map(i => `[${i}]`).join(', ')}]`);
    console.log(`Expected: 2, Got: ${removeCoveredIntervals(test1)}`);
    
    const test2 = [[1,4],[2,3]];
    console.log(`\nTest 2: [${test2.map(i => `[${i}]`).join(', ')}]`);
    console.log(`Expected: 1, Got: ${removeCoveredIntervals(test2)}`);
    
    const test3 = [[1,2],[1,4],[2,8],[3,5]];
    console.log(`\nTest 3: [${test3.map(i => `[${i}]`).join(', ')}]`);
    console.log(`Expected: 2, Got: ${removeCoveredIntervals(test3)}`);
}

runTests();