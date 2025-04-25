const mysql = require('mysql');
 
const connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    'jakkrJ3vgvsktfcg',
   database:    'diarsipin'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 });

module.exports = connection;