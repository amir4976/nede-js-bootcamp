const mongoose = require('mongoose')

 const connectToDB = async () => {
        try {
                const connect = await mongoose.connect(process.env.DATABASE_URI) 
                console.log({
                        host: connect.connection.host,
                        name: connect.connection.name
                })    
                return true ; 
        } catch 
        (err) {
                console.log(err)
                process.exit()
             
        }
}       


module.exports = connectToDB 