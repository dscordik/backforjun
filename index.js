import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000
const DB_URL = `mongodb+srv://mvasileiko_db_user:Oe8NrC3lKTdvjyEX@backforjun.ldno1ya.mongodb.net/?appName=backforjun`

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('server started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()