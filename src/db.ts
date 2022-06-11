import mongoose from 'mongoose';

async function connectDB() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.3lfxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to db!!.');
      })
      .catch((e) => {
        console.log(e);
      });;
}

function disconnectDB() {
    mongoose.connection.close();
}

export default { connectDB, disconnectDB };