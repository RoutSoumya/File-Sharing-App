import mongoose from 'mongoose';

const DBConnection = async() => {
    const MONGODB_URI = `""Put your own MongoDB server link here""`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error While conncting with the database', error.message);
    }
}

export default DBConnection;