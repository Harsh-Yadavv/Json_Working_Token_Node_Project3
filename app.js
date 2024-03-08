const express = require('express')
const app = express()

require('express-async-errors')
const connectDB = require('./db/connect')

const mainRouter = require('./routes/main')


const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const port = process.env.PORT || 3000 

//middlewares
app.use(express.json())

app.use('/api/v1', mainRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        //await connectDB(process.env.connectionString)
        app.listen(port, () => console.log(`Server running on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();