import mongoose from 'mongoose';



const ConnectDb = async () => {
    await mongoose.connect(`${process.env.CONNECT}`);
  };

export default ConnectDb;