import express from 'express';
const app = express();

app.use(express.json());
// Route
app.get('/users', (req, res) => {

    const users = [
        { name:'Felipe', age: 20 },
        { name:'Mayara', age: 23 }
    ]
    return res.json(users)
})


app.listen(8080);