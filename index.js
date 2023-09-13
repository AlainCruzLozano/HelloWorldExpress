const express = require('express');
const app = express() /* MANDA A LLAMAR AL CONSTRUCTOR DE LA CLASE*/

app.get('/', (request, response) => {
    response.send('Hello World from Express')
}) 
/*

FUNCIONALIDAD

http://localhost:3000
*/

app.listen(3000, () =>{
    console.log('listening on port 3000')
})
