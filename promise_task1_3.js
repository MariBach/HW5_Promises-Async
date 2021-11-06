/*Create a first function (which takes argument `data`) that always returns a promise and:
1.If data is not a number, the function returns a promise rejected instantly and give the word
"error" (in a string
2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string
*/    
function DataCheck(data) {
    return new Promise(function (resolve, reject) {
        if (typeof data != 'number') {
            console.log("error");            
            reject();
        }
        else if (data % 2 != 0) {
            setTimeout(() => {
                console.log("odd");
                resolve();                
            }, 1000);
        }
        else {
            setTimeout(() => {
               console.log("even");
                reject();            
            }, 2000);
        }
    });
}
let x = '2021';
DataCheck(x).catch(() => { });