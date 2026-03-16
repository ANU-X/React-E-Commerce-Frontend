import mongoose from "mongoose";
import dotenv from 'dotenv'
import dns from 'dns'
dns.setServers(['1.1.1.1','8.8.8.8'])
dotenv.config()

if(!process.env.MONGODB_URL){
    throw new Error(
        "Please provide mongodb-url"
    )
}

async function ConnectDB() {
    try{
       await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connect sussessful')
    }catch (err) {
        console.log('MongoDb not connect', err)
        process.exit(1)
    }
}

export default ConnectDB;
