import {createServer} from 'node:http';

const homename='127.0.0.1';
const port=3000;
const server=createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Nuestro servidor esta corriendo...');
})
server.listen(port,homename,()=>{
    console.log(`Servidor corriendo en http://${homename}:${port}`);
})
