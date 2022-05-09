const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var cookieParser = require('cookie-parser');
var patho = require('path');
// view engine setup
app.set('views', patho.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var corsOptions = {
    origin: "http://localhost:8081"
};




app.use(cors(corsOptions));
app.use(cookieParser());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));




const db = require("./app/models");
const Role = db.role;

require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
app.use('/public', express.static('public'));

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
const path = require('path');
const morgan = require('morgan');
const talkToChatbot = require('./chatbot');
const fulfillmentRoutes = require('./fulfillment');
var recordRouter = require('./app/routes/Record');
var productRouter = require('./app/routes/product.route');
const blogRoute = require('./app/routes/blog.routes');
const userRoute = require('./app/routes/users.routes');
const oauthRoute = require('./app/routes/oauth.routes');
const AppointementRoutes = require('./app/routes/AppRoutes');
const ChatAppRoutes = require('./app/routes/ChatAppRoutes')
const contactRoute = require('./app/routes/contact.routes');
const stripeRoute = require('./app/routes/payment.routes');
const scrapRoute = require('./app/routes/scrap.routes');



app.use(morgan('dev'));
app.use('/blogs', blogRoute)
app.use('/products', productRouter)
app.use('/users', userRoute)
app.use('/Appointments', AppointementRoutes);
app.use('/records', recordRouter);
app.use('/ChatApp', ChatAppRoutes);

app.use('/oauth', oauthRoute);
app.use('/contacts', contactRoute);
app.use('/stripe', stripeRoute);
app.use('/scrap', scrapRoute);

app.post('/chatbot', bodyParser.json(), bodyParser.urlencoded({ extended: true }), async(req, res) => {
    const message = req.body.message
        //console.log('message' + message)

    talkToChatbot(message)
        .then((response) => {
            res.send({ message: response })
        })
        .catch((error) => {
            console.log('Something went wrong: ' + error)
            res.send({
                error: 'Error occured here',
            })
        })
})
app.use(fulfillmentRoutes)

// Build setup
app.use(express.static(path.resolve(__dirname, "../react-app/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}