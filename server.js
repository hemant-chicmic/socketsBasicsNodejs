

import express from  'express' ; 
import dotenv from "dotenv" ; 




dotenv.config() ; 

const PORT = process.env.PORT || 3000 ;
const app = express() ; 



app.listen( PORT , () => {
    console.log( ` Server is running on http://localhost:${PORT}` ) ; 
} )







app.get( '/' , (req , res) => {
    res.status(200).json( {
        message : "Suceessfully fetched details"
    } )
} )


















