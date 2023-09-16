import mongoose from 'mongoose';



const ConnectDb =  () => {
     mongoose.connect(`mongodb+srv://mhaddaou:iQ8Ij9h9GgfBNZeC@cluster0.baz83mq.mongodb.net/mern?retryWrites=true&w=majority`).then(() =>{console.log('connect succesfully')}).catch(() =>{console.log('is not connect')});
  };

export default ConnectDb;