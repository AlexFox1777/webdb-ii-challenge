const express = require('express');
const carDB = require('./carDb');
const router = express.Router();

/*router.post('/', (req, res) => {

    carDB.insert(req.body)
        .then()
        .catch()
});*/

router.post('/', (req, res) => {
    const car = req.body;
    if (car.name) {
        carDB.insert(car)
            .then(car => res.status(201).json(car))
            .catch(err => res.status(500).json({error: "There was an error while saving the car to the database"}))
    } else {
        res.status(400).json({errorMessage: 'Please provide name for the car'})
    }

});

router.get('/', (req, res) => {
    carDB.get()
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(500).json({error: 'The car info can not be retrieved'}))
});


module.exports = router;

