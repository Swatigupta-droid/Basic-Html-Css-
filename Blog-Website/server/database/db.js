import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.kclup.mongodb.net/oxytocin?authSource=admin&replicaSet=atlas-2tu03s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;