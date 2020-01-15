
/**
 * Establishes connection with the game server
 */
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.168.76',
    port: 3000
    
  });

  // interpret incoming data as text
  

  conn.on("connect", () => {
    conn.setEncoding('utf8');
    conn.write("Name: CCI");
  })
  conn.on('data', (data) => {
     
    console.log("Server says: ", data);
    
    
  })

  return conn;
}

module.exports = connect;