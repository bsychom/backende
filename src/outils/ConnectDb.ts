import mongoose from 'mongoose';



const ConnectDb =  () => {
     mongoose.connect(`${process.env.CONNECT}`).then(() =>{console.log('connect succesfully')}).catch(() =>{console.log('is not connect')});
  };

export default ConnectDb;