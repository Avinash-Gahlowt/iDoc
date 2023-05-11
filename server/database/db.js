import mongoose  from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://avigahlowt:e9DHsNL3nY6GvPF7@cluster0.uxicrqn.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;