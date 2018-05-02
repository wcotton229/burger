var connection = require("../config/connection.js");


var orm = {
    selectAll: function (tableInput, cd) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) { throw err;}
            cb(result);
            console.log(result);
            
        });
    },

    // insertOne: function();
    
    // updateOne();
}



module.exports = orm;