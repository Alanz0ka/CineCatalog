const OpenConnection = require("./openconnection.js");

const openConnection = new OpenConnection();

openConnection.connect();

setTimeout(()=>{
    openConnection.end();
}, 4000);
