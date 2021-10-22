const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const port = process.env.POST || 5000;

app.get('/', (req, res) => {
    res.send('im learning node');
})

const users = [
    { id: '0', name: 'sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: '1', name: 'laboni', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: '2', name: 'sabina', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: '3', name: 'lasmia', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: '4', name: 'rabeka', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: '5', name: 'rabeka', email: 'sabana@gmail.com', phone: '0178888888' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {

        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

    console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['apple', 'mango', 'banana', 'orange'])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('yammy yammiy tok marka fazly')
})

app.listen(port, () => {
    console.log(
        'code', port
    );
})