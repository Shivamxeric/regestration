import mongoose from 'mongoose';

const connectDB =  async() => {
try {
        mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Db connected successfully'))
        .catch(()=> console.log('DB connected failed'))
} catch (error) {
    console.log('DB connected faileds')

}
    
}


export  default connectDB