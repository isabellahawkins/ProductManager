const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    newUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database Connection Established."))
    .catch(err => console.log("There was an error", err))