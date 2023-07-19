const express = require('express');
const PORT = 3000;
const path = require('path');
const apiRouter = require('./routes/api')

const app = express();

app.use("/api", apiRouter)
app.use('/', express.static(path.join(__dirname, "public")));



app.listen(PORT, ()=>{
    console.log(`Server runnig on PORT ${PORT}`)
})