require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth')


const app = express();


app.use(bodyParser.json());
app.use(authRoutes);


const mongoUri = 'mongodb+srv://trunganh:trunganh189908@cluster0.skep4mk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('error connecting to mongo', err)
});


app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
}); 

app.listen(3000, () => {
    console.log('Listening on port 3000');
})