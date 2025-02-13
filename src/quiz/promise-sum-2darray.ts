const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


async function addRow(arr: number[]): Promise<number> {
        console.log('add Row called ... ');
        let sum = 0;
        if(arr.length === 0) {
            throw('Cannot sum an empty array');
        }
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
}


async function runSumPromises(arr: number[][]) : Promise<number[]> {
    let promises : Promise<number>[] = [];
    for (let i = 0; i < arr.length; i++) {
        promises.push(addRow(arr[i]));
    }
    return Promise.all(promises);
}

async function getSum(arr: number[][]) : Promise<void> {
    let sum = 0;
    let sums = await runSumPromises(arr);
    sums.forEach((s) => sum = sum + s);
    console.log('sumPromise:', sum);
}

// Promise.all(promise)
//     .then((sums: number[]) => {
//         let sum = 0;
//         sums.forEach((s) => sum = sum + s);
//         console.log('sumPromise:', sum);
//     })
//     .catch((error: any) => {
//         console.error('sumPromise error:', error);
//     });
getSum(array2D_1);
console.log('End of script');