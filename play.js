const connect  = require('./client');
const stdin = process.stdin;
console.log('Connecting ...');
connect();


const handleUserInput = (key) => {

  if (key === '\u0003') {
    process.exit();
  }
}





const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

setupInput();

stdin.on('data', data => {
  
  return handleUserInput(data);
})