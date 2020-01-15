
/**
 * Establishes connection with the game server
 */
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    //'192.168.168.76'
  });

  // interpret incoming data as text
  

  conn.on("connect", () => {
    conn.setEncoding('utf8');
    conn.write("Name: CCI");

    
    
    
  });

  
  

  

  conn.on('data', (data) => {
     
    console.log("Server says: ", data);
  })

  return conn;
}


module.exports = connect;