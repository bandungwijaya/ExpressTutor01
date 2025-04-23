const express = require('express');
const router = express.Router();

//import database
const connection = require('../config/database');

router.get('/', function (req, res) {
    //query
    connection.query('SELECT * FROM doc_tags ORDER BY tag ASC', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Tags',
                data: rows // <-- data tags
            })
        }
    });
});

module.exports = router;