import { createServer } from "node:http";

const PORT = 8000

createServer((req, res)=>{
  res.end('Hy')
}).listen(PORT, ()=>{
    console.log(`Listenning at http://localhost:${PORT}`)
  })

