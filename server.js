const app = require('./app');

//Gives us access to the environment variables in the.env file
require("dotenv").config();
const PORT = process.env.PORT


//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
