let connection;
//Stores the active TCP connection object
const handleUserInput = (key) => {

  if (key === '\u0003') {
    process.exit();
  }
  if(key === 'w') {
     connection.write("Move: up");
     
  }
  if(key === 'a') {
    connection.write("Move: left");
 }
 if(key === 's') {
  connection.write("Move: down");
}
if(key === 'd') {
  connection.write("Move: right");
  }
if(key === 'n') {
  connection.write("Say: What\'s up noobs");
}
if(key === 'h') {
  connection.write("Say: Charge!")
}
  
}

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => {
    return handleUserInput(data);
  });
}

module.exports = { setupInput};


