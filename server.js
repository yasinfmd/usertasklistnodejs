 //ilgili bağımlılıkların çağırılması
 const http = require('http');
 const app = require('./app')
     //serverin oluşturulması
 const server = http.createServer(app);
 //serverin dinlenmesi
 server.listen(3001);