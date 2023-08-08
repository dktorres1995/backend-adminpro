const mongoose = require('mongoose');


const dbConnection = async () => {
    try{
        console.log('intentando conectar')

        await mongoose.connect(process.env.DB);
        console.log('conectado')
    } catch (error) {
        throw new Error('error al conectarse')
    }


}

module.exports = {
    dbConnection
}