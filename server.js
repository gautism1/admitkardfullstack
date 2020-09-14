const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet')

const app = express();

//security
app.use(helmet())

// compress all responses
app.use(compression());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);