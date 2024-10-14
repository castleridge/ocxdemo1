import express, { Application } from 'express';

const app = express();

app.get('/', (req, res) => {
    res.write("<h1>Welcome</h1");
    res.send();
});

app.get('/os', (req, res) => {
    res.write(`I am running on ${process.platform}`);
    res.send();
});

app.listen(3030, () => {
    console.log('The server is running');
}).on('error', err => {
    console.error(err);
});