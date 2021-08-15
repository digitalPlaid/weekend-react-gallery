const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    sqlQuery = `UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE "id" = $1
        `;
    pool.query(sqlQuery, [galleryId]).then(databaseResponse => {
        console.log('successfully PUT data to DB')
        res.sendStatus(200);
    }).catch(error => {
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT * FROM "gallery" 
        ORDER BY "id"
        `;
    pool.query(sqlQuery).then(dbRes => {
        console.log('Successful GET from db.');
        res.send(dbRes.rows);
    }).catch(error => {
        console.log('Failed to GET from db.')
        res.sendStatus(500);
    })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    let sqlQuery = `
        INSERT INTO "gallery"
        ("path", "description", "likes")
        VALUES ($1, $2, $3)
        `;
    let sqlParams = [req.body.path, req.body.description, req.body.likes];
    pool.query(sqlQuery, sqlParams).then(dbResposne => {
        console.log('Successful POST to db.');
        res.sendStatus(200);
    }).catch(error => {
        console.log('failed to POST to db: ', error)
        res.sendStatus(500);
    });
})

// DELETE route

router.delete('/:id', (req, res) => {
    let sqlQuery = `
        DELETE FROM "gallery"
        WHERE "id" = $1
        `;
    let sqlParams = [req.params.id];
    pool.query(sqlQuery, sqlParams).then(response => {
        console.log('successful DELETE.');
        res.sendStatus(200);
    }).catch(error => {
        console.log('Failed to DELETE from db: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;