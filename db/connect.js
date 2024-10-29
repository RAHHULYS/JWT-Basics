import mongoose from "mongoose";


export const connectDB = (uri) =>{ mongoose.connect(uri).then(()=>{console.log('connecter to db');})
.catch(err=>{console.log(err);});}
