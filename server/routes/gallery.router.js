const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    sqlQuery = `UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE "id" = $1
        `;
    pool.query(sqlQuery, [galleryID]).then(databaseResponse => {
        console.log('successfully PUT data to DB')
        sendStatus(200);
    }).catch(error => {
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;