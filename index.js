import express from "express";

const port = 8000;

const app = express();

app.get('/hello', (req, res) => {
        // res.type('application/json');
        // // res.set('Content-type', 'text/plain');
        // res.append('Warning', 'code');
        // res.append('Skits', 'Kozlits');
        // res.cookie('token', 'skoken', {
        //     domain: '',
        //     path: '/',
        //     secure: true,
        //     expire: 6000000
        // });
        // res.clearCookie('token', {path: '/uskoken'})
        // res.send('hello from server');
        res.status(404).end();
    });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
}); 