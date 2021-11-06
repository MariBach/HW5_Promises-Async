/*4.Create a second function (which takes argument "result") which should be executed after the
first function is done and print the final message like `Your number is ${result}` ONLY for cases
when the first function doesn't return " error“
*/
function NumCheck(data) {
    return new Promise((resolve, reject) => {
        if (typeof data != 'number') reject('error');
        else if (data % 2 != 0) {
            setTimeout(() => resolve('odd'), 1000);
        }
        else {
            setTimeout(() => reject('even'), 2000);
        }
    });
}

let x = 2020;

function display() {
    let result = NumCheck(x).then(result => {
        if (result != 'error') console.log(`The data is ${result}`);
    }, failure => {
        if (failure === 'even') console.log(`the data is ${failure}`);
        else console.log(failure);
    })
}
display();
