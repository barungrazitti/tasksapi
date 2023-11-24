const express = require('express');
const tasksRoutes = require('./app/routes/tasks');


const app = express();
app.use(express.json());

const port = 3000;

app.use('/', tasksRoutes);

app.get('/', (req, res) => {
    console.log(req.body);
    res.send(`
      <h4>Welcome to App</h4>
    `);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});