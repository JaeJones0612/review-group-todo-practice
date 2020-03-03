const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "student",
    password: "student"
})

connection.connect( (err) => {
    if (err) {
        throw new err;
    } else {
        console.log("connected to database")
    }
});

connection.query("CREATE DATABASE practice", (err) => {
    if (err) {
        console.log("error creating database")
    }

    console.log("database created!")
})