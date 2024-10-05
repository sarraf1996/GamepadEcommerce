const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'src/assets')));

app.set('view engine', 'ejs');

const port = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    return res.render(path.resolve(__dirname, 'src/index.ejs'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Express server started at port:${port}`);
});