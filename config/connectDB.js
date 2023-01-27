const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async ()=>{
        try {
            await mongoose.connect(process.env.MONGO_URL);
            console.log(`Database Running ${mongoose.connection.host}`);
        } catch (error) {
            console.log('database error');
        }
};

module.exports = connectDB;