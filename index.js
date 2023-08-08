const express = require("express");
require('dotenv').config();
const { dbConnection } = require('./database/config')
const cors = require('cors')

const app = express();

app.use(cors())

dbConnection(); 


console.log( process.env)
app.get( '/', ()=> {
    res.json({
        onk: true,
        msg: 'hola mundo'
    })
});

app.listen( 3000, () => {
    console.log('server running ' + process.env.PORT)
})