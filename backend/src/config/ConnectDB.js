import {mongoose} from 'mongoose'

import dotenv from 'dotenv';
dotenv.config();
let url = process.env.URL;


function mongodbConnect(){
    mongoose.connect(url).then(()=>{
        console.log('connected');



        
    }).catch((err)=>{
        console.log(err.message);
    })

}
    
    


    export default mongodbConnect;