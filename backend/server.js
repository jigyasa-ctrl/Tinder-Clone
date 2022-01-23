import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = "ADD_MONGO_URI"

// Middlewares
app.use(express.json())
//cors adds headers to requests and also safety when deploying online
app.use(Cors());

//DB config
//for smooth connection
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello there!"));
//to upload images to our application from database
app.post('/tinder/cards', (req, res) => {
const dbCard = req.body;

//creates a new document file
Cards.create(dbCard, (err, data) => {
    if(err){
        res.status(500).send(err)
    }else {
        //201 means created
        res.status(201).send(data)

    }
})
});
//creating another endpoint to download the data from the database
app.get('/tinder/cards', (req, res) => {
    Cards.find( (err, data) => {
        if(err){
            res.status(500).send(err)
        }else {
            //201 means created
            res.status(200).send(data)
    
        }
    })
    

})
//Listeners
app.listen(port, ()=> console.log(`listening on local host: ${port}`));
