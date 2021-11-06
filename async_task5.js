// 5. Write same tasks(1-4) using async/await
async function NumCheck(data) {
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

let x = 2021;

async function display() {
    try {
        let res = await NumCheck(x);
        if (res != 'error') console.log(`The data is ${res}`);
    } catch (failure)
    {
        if (failure === 'even') console.log(`the data is ${failure}`);
        else console.log(failure);

    }
}
display();