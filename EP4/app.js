const express = require('express');
// const debug = require('debug')('app');
// import chalk from 'chalk';
// const chalk = require('chalk')
const app = express();
const port = 3000;

app.get("/", (req,res) =>{

    res.send('Hello Growth Potential Test !!');

})

app.listen(port, ()=>{

    // console.log("Listening on port %d", port);
    // console.log("Listening on port" + chalk.green(" : " + port));
    console.log("Listening on port" + " : " + port);
    // debug("Listening on port" + " : " + port);

})