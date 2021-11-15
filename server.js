const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
//const User=require("./models/user.schema")


//import router
const testimonialRouter = require("./routers/testimonial.route");

//create server
const app = express();

//use middlewars
app.use(cors())
app.use(bodyParser.json());


//mongodb url
const dbURL = "mongodb+srv://Amisha:amisha011@cluster0.dujaf.mongodb.net/FirstPrincipals?retryWrites=true&w=majority"
//coonecting with db

//connect with mongoose
mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("Connected to MongoDb");


        app.listen(8001, () => {
            console.log("server is on port 8001")
        })

    })
    .catch(error => {
        console.log("error in coonecting with db", error)
    })
app.use("/api/Testimonials",testimonialRouter);