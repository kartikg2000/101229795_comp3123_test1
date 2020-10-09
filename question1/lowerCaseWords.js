function lowerCaseWords (input)
{
    let index = -1;
    const arr_length = input ? input.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
        const value = input[index];

    if (isNaN(value)) {
            result[++resIndex] = value;
        }
    }
    return result;  
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), 1);
      });
}
console.log(lowerCaseWords([0, 15, 'kartik',true, -22,'nishant', 47, 'kadapa']));