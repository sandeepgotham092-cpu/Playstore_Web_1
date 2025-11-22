import express from 'express';
import http from 'http';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mainRouter from '../router/mainRouter';

const app = express();

app.use(cors({
    credentials : true,
}))
app.use(compression());
app.use(bodyParser.json())
const server = http.createServer(app);
server.listen(8080,()=>{
    console.log("server running on http://localhost:8080");
});
const  MONGODB_URL = 'mongodb+srv://sandeepgotham:Sandeep161@cluster0.2s4kes5.mongodb.net';
mongoose.Promise = Promise;
mongoose.connect(`${MONGODB_URL}/appslist`);
mongoose.connection.on('error',(error:Error)=>console.log(error));
mongoose.connection.on('connected',()=>console.log("Database connected"));
app.use('/',mainRouter());
