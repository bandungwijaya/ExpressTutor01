const express = require('express');
const router = express.Router();

//import express validator
const { body, validationResult } = require('express-validator');

//import database
const connection = require('../config/database');

/**
 * INDEX TAGS
 */
router.get('/', function (req, res) {
    //query
    connection.query('SELECT * FROM doc_tag_tests ORDER BY tag ASC', function (err, rows) {
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

/**
 * STORE TAGS
 */
 router.post('/store', [

    //validation
    body('tag').notEmpty(),
    body('ket').notEmpty()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //define formData
    let formData = {
        tag: req.body.tag,
        ket: req.body.ket
    }

    // insert query
    connection.query('INSERT INTO doc_tag_tests SET ?', formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows[0]
            })
        }
    })

});

module.exports = router;