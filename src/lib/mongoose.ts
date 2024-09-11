import mongoose from 'mongoose';

export default function dbConnect() {
    const MONGODB_URI = process.env.MONGODB_URI;
    console.log(MONGODB_URI);
    
    mongoose.connect(MONGODB_URI as string).then(() => {
        console.log("MongoDb Connected");
    })
}