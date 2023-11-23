const express = require('express');
const tasksRoutes = require('./app/routes/tasks');

const app = express();

const port = 3000;

app.use('/', tasksRoutes);

app.get('/', (req, res) => {
    res.send(`
      <h4>Welcome to App</h4>
    `);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});