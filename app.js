// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// //template string
// console.log(`Total Memory:  ${ totalMemory }`);
// console.log(`Free Memory:  ${ freeMemory }`);


// const fs = require('fs');
// // const files = fs.readFileSync('./');
// // console.log(files);


// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files)
// });

const EventEmitter = require('events');
// const emitter = new EventEmitter();



const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
logger.log('message');

//Raise: Logging (data:message)