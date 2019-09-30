const express = require('express');
const path = require('path');
const port = 3000

const app = express();

// app.get('/', (req,res) => res.send('what uppppp'));

app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => console.log(`App listening on port ${port}`));