const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function addRow(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('add Row called ... ');
        let sum = 0;
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        resolve(sum);
    });
}


let promise : Promise<number>[] = [];
for (let i = 0; i < array2D_1.length; i++) {
    promise.push(addRow(array2D[i]));
}

Promise.all(promise)
    .then((sums: number[]) => {
        let sum = 0;
        sums.forEach((s) => sum = sum + s);
        console.log('sumPromise:', sum);
    })
    .catch((error: any) => {
        console.error('sumPromise error:', error);
    });

console.log('End of script');