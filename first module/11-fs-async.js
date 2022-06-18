const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return null;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return null;
        }
        const second = result;
        console.log(first, second);
        
        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${second}`, { flag: 'a' }, (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                else {
                    console.log('File written successfully')
                }
            })

    })
})
console.log('starting next task')