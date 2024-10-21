import express from "express";
import movieRoutes from "./router/movies.router.js"

const app =express();

const PORT = 6969;

app.get("/",(req,res)=>{
    res.json({msg:"Hello node"});
});


app.use('/movies',movieRoutes); 


app.listen(PORT,()=>{
    console.log('The server is  running at http://localhost:${PORT}');
});            

