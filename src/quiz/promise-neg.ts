const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function hasNegative(arr: number[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
        console.log('hasNegative called ... ');
        if(arr.length === 0) {
            reject('Cannot check an empty array');
        }
        if(arr.filter((num) => num < 0)) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

const promises : Promise<boolean>[] = [];
for (let i = 0; i < array2D_3.length; i++) {
    promises.push(hasNegative(array2D_3[i]));
}

Promise.any(promises)
  .then((response) => {
      console.log(response);
  })
  .catch((error: any) => {
      console.error(`Failed to fetch: ${error}`);
  });